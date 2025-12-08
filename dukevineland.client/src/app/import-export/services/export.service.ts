import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ExportOptionsResponseDto } from '../models/export-options-response-dto';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  private http = inject(HttpClient);

  constructor() { }

  getExportOptions(): Observable<ExportOptionsResponseDto> {

    //set up the url
    const url: string = '/api/Export/options';

    // return the observable
    return this.http.get<ExportOptionsResponseDto>(url);
  }

}
