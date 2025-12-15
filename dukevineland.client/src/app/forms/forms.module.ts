import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

import { FormsOverviewComponent } from './components/forms-overview/forms-overview.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { EditExistingBookComponent } from './components/edit-existing-book/edit-existing-book.component';
import { FindBookDetailsComponent } from './components/find-book-details/find-book-details.component';
import { BasicFieldsFormComponent } from './components/basic-fields-form/basic-fields-form.component';
import { CoverImageFormComponent } from './components/cover-image-form/cover-image-form.component';
import { NotesAndTagsFormComponent } from './components/notes-and-tags-form/notes-and-tags-form.component';

@NgModule({
  declarations: [
    //FormsOverviewComponent,
    //AddNewBookComponent,
    //EditExistingBookComponent,
    //FindBookDetailsComponent,
    //BasicFieldsFormComponent,
    //CoverImageFormComponent,
    //NotesAndTagsFormComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatChipsModule,
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
