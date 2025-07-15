import { Component, inject, OnInit } from '@angular/core';

import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { ITalliedBook } from '../../../shared/models/books/itallied-book';

import { BookTablesService } from '../../services/book-tables-service.service';

@Component({
  selector: 'app-book-tallies',
  templateUrl: './book-tallies.component.html',
  styleUrls: ['./book-tallies.component.css']
})
export class BookTalliesComponent implements OnInit {

  private _bookTablesService = inject(BookTablesService);

  private _snackBar = inject(MatSnackBar);

  private _tallies: ITalliedBook[] | undefined = undefined;

  private readonly columns: string[] = [
    'dateString',
    'author',
    'title',
    'pages',
    'totalBooks',
    'totalBookFormat',
    'totalComicFormat',
    'totalAudioFormat',
    'totalPagesRead',
  ];

  public get loading(): boolean { return this._tallies === undefined; }
  public get hasData(): boolean { return !this.loading; }
  public get dataSource(): any { return !this.loading ? this._tallies : []; }
  public get displayedColumns(): string[] { return this.columns; }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit() {
    this.getTallies();
  }

  getTallies() {
    this._bookTablesService
      .getBookTallies()
      .subscribe(
        resp => {
          console.log('Rxed resp:', JSON.stringify(resp));
          if (resp !== null && resp !== undefined && resp.length > 0) {

            // got the data ok 
            this._tallies = resp;
          }
          else {

            // an error occured
            this.openSnackBar('Get Book tallies failed: ', 'OK');
          }

        });
  }

}
