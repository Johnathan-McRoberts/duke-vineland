import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IReadBook } from '../../../shared/models/books/iread-book';
import { BookTablesService } from '../../services/book-tables-service.service';


import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-read-books',
  templateUrl: './read-books.component.html',
  styleUrls: ['./read-books.component.css']
})
export class ReadBooksComponent implements AfterViewInit {

  constructor() {

    this._books = [];

    this.dataSource = new MatTableDataSource(this._books);
  }

  dataSource: MatTableDataSource<IReadBook>;

  @ViewChild(MatPaginator) public paginator: MatPaginator | any;
  @ViewChild(MatSort) public sort: MatSort | any;

  private _bookTablesService = inject(BookTablesService);

  private _snackBar = inject(MatSnackBar);

  private _books: IReadBook[] | undefined = undefined;

  private readonly columns: string[] = [
    'date',
    'author',
    'title',
    'pages',
  ];

  public get loading(): boolean { return this._books === undefined; }
  public get hasData(): boolean { return !this.loading; }
  //public get dataSource(): any { return !this.loading ? this._books : []; }
  public get displayedColumns(): string[] { return this.columns; }

  ngAfterViewInit() {
    this.getBooks();
  }

  getBooks() {
    this._bookTablesService
      .getReadBooks()
      .subscribe(
        resp => {
          console.log('Rxed resp:', JSON.stringify(resp));
          if (resp !== null && resp !== undefined && resp.length > 0) {

            // got the data ok 
            this._books = resp;
            this.dataSource = new MatTableDataSource(this._books);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          else {

            // an error occured
            this.openSnackBar('Get Books read failed: ', 'OK');
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
}
