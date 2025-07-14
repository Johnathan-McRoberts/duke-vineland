import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesOverviewComponent } from './components/tables-overview/tables-overview.component';
import { BookTalliesComponent } from './components/book-tallies/book-tallies.component';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    TablesOverviewComponent,
    BookTalliesComponent
  ],
  imports: [
    CommonModule,

    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [TablesOverviewComponent]
})
export class TablesModule { }
