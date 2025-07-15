import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReadBook } from '../../shared/models/books/iread-book';

import { ITalliedBook } from '../../shared/models/books/itallied-book';

@Injectable({
  providedIn: 'root'
})
export class BookTablesService {

  private http = inject(HttpClient);

  constructor() { }

  getBookTallies(): Observable<ITalliedBook[]> {

    //set up the url
    const url: string = '/api/BookTables/tallied-books';

    // return the observable
    return this.http.get<ITalliedBook[]>(url);
  }

  getReadBooks(): Observable<IReadBook[]> {

    //set up the url
    const url: string = '/api/BookTables/read-books';

    // return the observable
    return this.http.get<IReadBook[]>(url);
  }
}
