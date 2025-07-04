import { HttpClient } from '@angular/common/http';
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
    const url: string = 'UserLogin';

    return this.http
      .post<UserLoginResponse>(url, request);
  }
}
