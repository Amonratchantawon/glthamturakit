import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AccountModel } from '../account.model';
import { Constants } from "../../app.constants";
@Injectable()
export class AccountService {

  constructor(private http: Http) { }
  getAccount() {
    return this.http.get(Constants.URL + 'api/accountcharts').toPromise()
      .then(response => response.json() as AccountModel)
      .catch(this.handleError);
  }
  deleteAccount(id) {
    return this.http.delete(Constants.URL + 'api/orther/accountcharts/' + id).toPromise()
      .then(response => response.json() as AccountModel)
      .catch(this.handleError);
  }
  // Error function
  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
