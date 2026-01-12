import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import {
  FormControl,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormArray

} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { NewBookBasics } from '../../models/new-book-basics';
import { NewBook } from '../../models/new-book';
import { BookEditorService } from '../../services/book-editor-service';
import { IEditorDetails } from '../../models/ieditor-details';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, of, startWith } from 'rxjs';

@Component({
  standalone: false,  // this is now required when using NgModule
  selector: 'app-add-book-stepper',
  templateUrl: './add-book-stepper.component.html',
  styleUrls: ['./add-book-stepper.component.css'],
  providers: [
    provideNativeDateAdapter(),
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ]
})
export class AddBookStepperComponent implements OnInit, AfterViewInit {

  private _bookEditorService = inject(BookEditorService);
  private _formBuilder = inject(FormBuilder);
  private _snackBar = inject(MatSnackBar);

  private _editorDetails: IEditorDetails | undefined = undefined;

  bookAuthorCtrl: FormControl = new FormControl('', Validators.required);
  bookLanguageCtrl: FormControl = new FormControl('', Validators.required);
  basicsFormGroup = this._formBuilder.group({
    dateCtrl: ['', Validators.required],
    authorCtrl: this.bookAuthorCtrl,
    titleCtrl: ['', Validators.required],
    pagesCtrl: ['', Validators.required],
    nationalityCtrl: ['', Validators.required],
    originalLanguageCtrl: this.bookLanguageCtrl,
    formatCtrl: ['', Validators.required],
  });

  imageCtrl: FormControl = new FormControl('', Validators.required);
  imageFormGroup = this._formBuilder.group({
    imageUrlCtrl: this.imageCtrl,
  });

  notesFormGroup = this._formBuilder.group({
    notesCtrl: ['', Validators.required],
    tagsCtrl: [''],
  });

  public basics: NewBookBasics = new NewBookBasics();

  public currentDate = new Date();

  ngOnInit() {

    this.filteredAuthorOptions =
      this.getFilteredAuthorOptions();
    this.filteredLanguageOptions =
      this.getFilteredLanguageOptions();

    this.imageCtrl.valueChanges.subscribe((value) => {
      console.log(" imageCtrl : " + value)
      this.imageUrl = value as string;
    })
  }

  ngAfterViewInit() {
    this.getEditorDetails();
  }

  getEditorDetails() {
    this._bookEditorService
      .getEditorDetails()
      .subscribe(
        resp => {
          console.log('Rxed resp:', JSON.stringify(resp));
          if (resp !== null && resp !== undefined) {

            // got the data ok 
            this._editorDetails = resp;

            this.setupAuthorNames();
            this.setupLanguages();
            this.setupNations();

          }
          else {

            // an error occured
            this.openSnackBar('Get editor details failed: ', 'OK');
          }
        });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  // Authors
  optionForAuthors: string[] = ['A. N. Other'];
  filteredAuthorOptions: Observable<string[]> = new Observable<string[]>();
  private filterAuthors(value: string): string[] {
    const filterValue = value.toLowerCase();

    let authors: string[] =
      this.optionForAuthors.filter(option => option.toLowerCase().indexOf(filterValue) === 0);

    return authors;
  }
  private getFilteredAuthorOptions(): Observable<string[]> {
    return this.bookAuthorCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterAuthors(value || '')),
    );
  }
  private setupAuthorNames() {

    if (this._editorDetails !== null &&
      this._editorDetails !== undefined &&
      this._editorDetails.authorNames !== null) {
      this.optionForAuthors = this._editorDetails.authorNames;
      this.filteredAuthorOptions = this.getFilteredAuthorOptions();
    }
  }


  // Languages
  optionForLanguages: string[] = ['A Language'];
  filteredLanguageOptions: Observable<string[]> = new Observable<string[]>();
  private filterLanguages(value: string): string[] {
    const filterValue = value.toLowerCase();

    let languages: string[] =
      this.optionForLanguages.filter(option => option.toLowerCase().indexOf(filterValue) === 0);

    return languages;
  }
  private setupLanguages() {

    if (this._editorDetails !== null &&
      this._editorDetails !== undefined &&
      this._editorDetails.languages !== null) {
      this.optionForLanguages = this._editorDetails.languages;
      this.filteredLanguageOptions = this.getFilteredLanguageOptions();
    }
  }
  private getFilteredLanguageOptions(): Observable<string[]> {
    return this.bookLanguageCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterLanguages(value || '')),
    );
  }


  // Nations
  public optionForNations: string[] = ['A Nation'];
  public filteredNationOptions: Observable<string[]> = new Observable<string[]>();
  private setupNations() {

    if (this._editorDetails !== null &&
      this._editorDetails !== undefined &&
      this._editorDetails.countryNames !== null) {
      this.optionForNations = this._editorDetails.countryNames;
      this.filteredNationOptions = of(this.optionForNations);
    }
  }


  // Image
  imageUrl: string | undefined;


  // Loading
  public get loading(): boolean { return this._editorDetails === undefined; }
  public get hasData(): boolean { return !this.loading; }
}
