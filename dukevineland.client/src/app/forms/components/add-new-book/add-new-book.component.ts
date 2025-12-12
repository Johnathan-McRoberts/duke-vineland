import { Component, inject } from '@angular/core';

import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { NewBookBasics } from '../../models/new-book-basics';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ]
})
export class AddNewBookComponent {

  private _formBuilder = inject(FormBuilder);

  public basics: NewBookBasics = new NewBookBasics();

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    "address": {
      "addressLine1": "Street name 1",
      "addressLine2": "Street name 2",
      "zipCode": "1000",
      "city": "New York"
    } 
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

}
