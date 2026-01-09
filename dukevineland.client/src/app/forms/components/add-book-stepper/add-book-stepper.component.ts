import { Component, inject } from '@angular/core';

import {
  FormControl,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormArray

} from '@angular/forms';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { NewBookBasics } from '../../models/new-book-basics';
import { NewBook } from '../../models/new-book';

@Component({
  standalone: false,  // this is now required when using NgModule
  selector: 'app-add-book-stepper',
  templateUrl: './add-book-stepper.component.html',
  styleUrls: ['./add-book-stepper.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ]
})
export class AddBookStepperComponent {

  private _formBuilder = inject(FormBuilder);

  basicsFormGroup = this._formBuilder.group({
    dateCtrl: ['', Validators.required],
    authorCtrl: ['', Validators.required],
    titleCtrl: ['', Validators.required],
    pagesCtrl: ['', Validators.required],
    nationalityCtrl: ['', Validators.required],
    originalLanguageCtrl: ['', Validators.required],
    formatCtrl: ['', Validators.required],
  });

  imageFormGroup = this._formBuilder.group({
    imageUrlCtrl: ['', Validators.required],
  });

  notesFormGroup = this._formBuilder.group({
    notesCtrl: ['', Validators.required],
    tagsCtrl: [''],
  });

  public basics: NewBookBasics = new NewBookBasics();

}
