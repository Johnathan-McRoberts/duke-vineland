import {
  AfterViewInit, Component, inject, OnInit,
  ChangeDetectionStrategy, computed, model, signal
} from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { } from '@angular/core';

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
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { IBookAuthor } from '../../../shared/models/books/ibook-author';
import { IReadBook } from '../../../shared/models/books/iread-book';

@Component({
  standalone: false,  // this is now required when using NgModule
  selector: 'app-add-book-stepper',
  templateUrl: './add-book-stepper.component.html',
  styleUrls: ['./add-book-stepper.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
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


  tagsSelection: string[] = [];
  tagsSelectionCtrl: FormControl = new FormControl(this.tagsSelection);
  notesFormGroup = this._formBuilder.group({
    notesCtrl: ['', Validators.required],
    tagsCtrl: this.tagsSelectionCtrl,
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
            this.setupTags();
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
      this._editorDetails.countryNames !== null)
    {
      this.optionForNations = this._editorDetails.countryNames;
      this.filteredNationOptions = of(this.optionForNations);
    }
  }


  // Image
  imageUrl: string | undefined;


  // Loading
  public get loading(): boolean { return this._editorDetails === undefined; }
  public get hasData(): boolean { return !this.loading; }

  public get canShowDetail(): boolean
  {
    return !this.loading &&
      this.basicsFormGroup.valid &&
      this.imageFormGroup.valid &&
      this.notesFormGroup.valid &&
      this.notesFormGroup.valid &&
      (this.newBookItem !== undefined);
  }

  // Tags
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly initialTags: string[] = []; 
  readonly currentTag = model('');
  readonly tags = signal(this.initialTags);
  allTags: string[] = [];
  allAvailableTags: string[] = [];
  selectedTags: string[] = [];

  readonly filteredTags = computed(() => {
    const currentTag = this.currentTag().toLowerCase();
    return currentTag
      ? this.allAvailableTags.filter(tag => tag.toLowerCase().includes(currentTag))
      : this.allAvailableTags.slice();
  });

  private setupTags() {

    if (this._editorDetails !== null &&
      this._editorDetails !== undefined &&
      this._editorDetails.tags !== null)
    {
      this.allAvailableTags = this._editorDetails.tags;

      this.allTags = [];
      for (let i = 0; i < this.allAvailableTags.length; i++) {
        this.allTags.push(this.allAvailableTags[i]);
      }
      console.log("setup allAvailableTags => " + JSON.stringify(this.allAvailableTags));
    }
  }

  displayTags: string = '';
  setupDisplayTags(): string {
    this.displayTags = "";
    for (let i = 0; i < this.selectedTags.length; i++) {
      if (i === 0) {
        this.displayTags = this.selectedTags[0];
      }
      else {
        this.displayTags += ", ";
        this.displayTags += this.selectedTags[i];
      }
    }

    return this.displayTags;
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    console.log("Rx'ed addTag event for " + event.value);

    // Add our tag
    if (value) {
      this.tags.update(tags => [...tags, value]);
    }

    this.selectedTags.push(value);

    // Clear the input value
    this.currentTag.set('');
  }

  removeTag(tag: string): void {

    let trimmedTag: string = tag.trim();
    console.log("Rx'ed removeTag event for " + trimmedTag);
    if (trimmedTag) {
      const index = this.selectedTags.indexOf(trimmedTag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      }
    }

    if (trimmedTag) {
      // check if needs added to the available set
      const index = this.allTags.indexOf(trimmedTag);

      if (index >= 0) {
        this.allAvailableTags.push(trimmedTag);
        this.allAvailableTags.sort();
      }
    }

    this.tags.update(tags => {
      const index = tags.indexOf(tag);
      if (index < 0) {
        return tags;
      }

      tags.splice(index, 1);
      this.announcer.announce(`Removed ${tag}`);
      return [...tags];
    });
  }

  selectedTag(event: MatAutocompleteSelectedEvent): void {

    console.log("Rx'ed selectedTag event for " + event.option.viewValue);

    let tag: string = event.option.viewValue.trim();
    this.selectedTags.push(tag);

    if (tag) {
      const index = this.allAvailableTags.indexOf(tag);
      if (index >= 0) {
        this.allAvailableTags.splice(index, 1);
      }
    }

    this.tags.update(tags => [...tags, event.option.viewValue]);
    this.currentTag.set('');
    event.option.deselect();
  }

  // Display

  newBookItem: NewBook | undefined = undefined;
  onNewBookDisplay() {
    console.log("Rx'ed selectedTag event for onNewBookDisplay");

    let dateStringValue: string =
      this.basicsFormGroup.controls['dateCtrl'].value as string;

    let dateDateValue: Date = new Date(dateStringValue);
    let pagesStringValue: string =
      this.basicsFormGroup.controls['pagesCtrl'].value as string;
    let pagesValue: number = +pagesStringValue;

    this.newBookItem =
      new NewBook(

        /*date:*/ dateDateValue,
        /*author:*/ this.basicsFormGroup.controls['authorCtrl'].value as string,
        /*title:*/ this.basicsFormGroup.controls['titleCtrl'].value as string,
        /*pages:*/ pagesValue,
       /* nationality:*/ this.basicsFormGroup.controls['nationalityCtrl'].value as string,
        /*originalLanguage:*/
        this.basicsFormGroup.controls['originalLanguageCtrl'].value as string,
        /*format:*/ this.basicsFormGroup.controls['formatCtrl'].value as string,

        /*imageUrl:*/ this.imageFormGroup.controls['imageUrlCtrl'].value as string,

        /*notes:*/ this.notesFormGroup.controls['notesCtrl'].value as string,
       /* tags:*/ this.selectedTags
      );

  }

  public newBookItemAuthor(): string
  { return this.newBookItem ? this.newBookItem.author : ''; }
  public newBookItemPages(): number
  { return this.newBookItem ? this.newBookItem.pages : 0; }
  public newBookItemTitle(): string
  { return this.newBookItem ? this.newBookItem.title : ''; }
  public newBookItemDate(): Date
  { return this.newBookItem ? this.newBookItem.date : new Date(); }
  public newBookItemImageUrl(): string
  { return this.newBookItem ? this.newBookItem.imageUrl : ''; }
  public newBookItemNotes(): string
  { return this.newBookItem ? this.newBookItem.notes : ''; }
  public newBookItemOriginalLanguage(): string
  { return this.newBookItem ? this.newBookItem.originalLanguage : ''; }
  public newBookItemNationality(): string
  { return this.newBookItem ? this.newBookItem.nationality : ''; }
  public newBookItemFormat(): string
  { return this.newBookItem ? this.newBookItem.format : ''; }

  public newBookItemTags(): string[]
  { return this.newBookItem ? this.newBookItem.tags : []; } 


  // Add
  onAddNewBook() {
    console.log("Rx'ed selectedTag event for onAddNewBook"); }


  readonly announcer = inject(LiveAnnouncer);
}
