import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SignupModel } from "./signup.model";
import { Constants } from "../app.constants";

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  signup(signup) {
    return this.http.post(Constants.URL + 'api/auth/signup', signup).toPromise()
      .then(response => response.json() as SignupModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
