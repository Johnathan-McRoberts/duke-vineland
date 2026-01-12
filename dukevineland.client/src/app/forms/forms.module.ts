import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';

import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

import { FormsOverviewComponent } from './components/forms-overview/forms-overview.component';
import { EditExistingBookComponent } from './components/edit-existing-book/edit-existing-book.component';
import { FindBookDetailsComponent } from './components/find-book-details/find-book-details.component';
import { AddBookStepperComponent } from './components/add-book-stepper/add-book-stepper.component';

@NgModule({
  declarations: [
    FormsOverviewComponent,
    AddBookStepperComponent,
    EditExistingBookComponent,
    FindBookDetailsComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    AsyncPipe,

    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule
  ],
  exports: [FormsOverviewComponent]
})
export class DataFormsModule { }
