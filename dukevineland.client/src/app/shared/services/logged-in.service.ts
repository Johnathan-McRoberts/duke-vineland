import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserLoginRequest } from '../models/user-login-request';
import { UserLoginResponse } from '../models/user-login-response';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  private http = inject(HttpClient);
  constructor() { }
/*  '/weatherforecast'*/
  getUserLogin(
    userName: string,
    userPassword: string): Observable<UserLoginResponse> {

      // set up the request payload
    const request: UserLoginRequest = {
      name: userName,
      password: userPassword,
    }

    //set up the url
    //const url: string = 'UserLogin';
    //const url: string = '/api/UserLogin/log-in';

    //const url: string = 'https://localhost:7297/api/UserLogin/log-in';
    const url: string = '/weatherforecast/log-in';
    const queryParams: string = '?Name=' + userName + '&Password=' + userPassword;
    
    //const headers = new HttpHeaders().set('Content-Type', 'application');

    //const httpOptions =
    //{
    //  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //};

    //?Name = JMcR & Password=Pukka1234

    return this.http.get<UserLoginResponse>(url + queryParams);

    //return this.http
    //  .post<UserLoginResponse>(url, request, { headers: headers });
  }
}
