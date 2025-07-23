import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesOverviewComponent } from './components/tables-overview/tables-overview.component';
import { BookTalliesComponent } from './components/book-tallies/book-tallies.component';
import { ReadBooksComponent } from './components/read-books/read-books.component';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    TablesOverviewComponent,
    BookTalliesComponent,
    ReadBooksComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [TablesOverviewComponent]
})
export class TablesModule { }
