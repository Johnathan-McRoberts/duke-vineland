import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEditorDetails } from '../models/ieditor-details';

@Injectable({
  providedIn: 'root',
})
export class BookEditorService {

  private http = inject(HttpClient);

  public getEditorDetails(): Observable<IEditorDetails> {

    //set up the url
    const url: string = '/api/BookEditor/editor-details';

    // return the observable
    return this.http.get<IEditorDetails>(url);
  }
}
