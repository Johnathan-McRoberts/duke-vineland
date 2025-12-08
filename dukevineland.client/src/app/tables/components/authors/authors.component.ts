import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { IBookAuthor } from '../../../shared/models/books/ibook-author';

import { BookTablesService } from '../../services/book-tables-service.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements AfterViewInit {

  constructor() {

    this._authors = [];

    this.dataSource = new MatTableDataSource(this._authors);
  }

  dataSource: MatTableDataSource<IBookAuthor>;

  @ViewChild(MatPaginator) public paginator: MatPaginator | any;
  @ViewChild(MatSort) public sort: MatSort | any;

  private _bookTablesService = inject(BookTablesService);

  private _snackBar = inject(MatSnackBar);

  private _authors: IBookAuthor[] | undefined = undefined;

  public expandedElement: IBookAuthor | null = null;

  private readonly columns: string[] = [
    'name',
    'nationality',
    'language',
    'totalBooksReadBy',
    'totalPages',
  ];
  public columnsToDisplayWithExpand = [...this.columns, 'expand'];

  public get loading(): boolean { return this._authors === undefined; }
  public get hasData(): boolean { return !this.loading; }

  public get displayedColumns(): string[] { return this.columnsToDisplayWithExpand; }

  ngAfterViewInit() {
    this.getAuthors();
  }

  getAuthors() {
    this._bookTablesService
      .getAuthors()
      .subscribe(
        resp => {
          console.log('Rxed resp:', JSON.stringify(resp));
          if (resp !== null && resp !== undefined && resp.length > 0) {

            // got the data ok 
            this._authors = resp;
            this.dataSource = new MatTableDataSource(this._authors);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          else {

            // an error occured
            this.openSnackBar('Get Authors failed: ', 'OK');
          }

        });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  /** Checks whether an element is expanded. */
  isExpanded(element: IBookAuthor) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: IBookAuthor) {
    console.log('toggle:', JSON.stringify(element));
    this.expandedElement = this.isExpanded(element) ? null : element;
  }
}
