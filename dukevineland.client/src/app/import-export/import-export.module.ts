import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportExportOverviewComponent } from './components/import-export-overview/import-export-overview.component';



@NgModule({
  declarations: [
    ImportExportOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ImportExportOverviewComponent]
})
export class ImportExportModule { }
