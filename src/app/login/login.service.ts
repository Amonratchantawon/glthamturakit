import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { LoginModel } from "./login.model";
import { Constants } from "../app.constants";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(login) {
    return this.http.post(Constants.URL + 'api/auth/signin', login).toPromise()
      .then(response => response.json() as LoginModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
