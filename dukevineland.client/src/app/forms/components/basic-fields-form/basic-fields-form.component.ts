import { Component, Input, OnDestroy } from '@angular/core';
//import { Component, input, output, OnDestroy } from '@angular/core';
import { formatDate } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-basic-fields-form',
  templateUrl: './basic-fields-form.component.html',
  styleUrls: ['./basic-fields-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: BasicFieldsFormComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: BasicFieldsFormComponent
    },
  ]
})
export class BasicFieldsFormComponent implements ControlValueAccessor, OnDestroy, Validator {

  @Input() legend: string = '';

  form: FormGroup = this.fb.group({
    addressLine1: [null, [Validators.required]],
    addressLine2: [null, [Validators.required]],
    zipCode: [null, [Validators.required]],
    city: [null, [Validators.required]]
  });

  onTouched: Function = () => { };

  onChangeSubs: Subscription[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnDestroy() {
    for (let sub of this.onChangeSubs) {
      sub.unsubscribe();
    }
  }

  registerOnChange(onChange: any) {
    const sub = this.form.valueChanges.subscribe(onChange);
    this.onChangeSubs.push(sub);
  }

  registerOnTouched(onTouched: Function) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    if (disabled) {
      this.form.disable();
    }
    else {
      this.form.enable();
    }
  }

  writeValue(value: any) {
    if (value) {
      this.form.setValue(value, { emitEvent: false });
    }
  }

  validate(control: AbstractControl) {

    if (this.form.valid) {
      return null;
    }

    let errors: any = {};

    errors = this.addControlErrors(errors, "addressLine1");
    errors = this.addControlErrors(errors, "addressLine2");
    errors = this.addControlErrors(errors, "zipCode");
    errors = this.addControlErrors(errors, "city");

    return errors;
  }

  addControlErrors(allErrors: any, controlName: string) {

    const errors = { ...allErrors };

    const controlErrors = this.form.controls[controlName].errors;

    if (controlErrors) {
      errors[controlName] = controlErrors;
    }

    return errors;
  }

}
