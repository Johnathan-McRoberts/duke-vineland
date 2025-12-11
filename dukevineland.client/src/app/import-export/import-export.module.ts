import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportExportOverviewComponent } from './components/import-export-overview/import-export-overview.component';
import { ExportComponent } from './components/export/export.component';
import { ImportComponent } from './components/import/import.component';

import { LoggedInService } from './../shared/services/logged-in.service';

import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    ImportExportOverviewComponent,
    ExportComponent,
    ImportComponent
  ],
  imports: [
    CommonModule,

    FormsModule,

    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [LoggedInService],
  exports: [ImportExportOverviewComponent]
})
export class ImportExportModule { }
