import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AccountModel, AccountListModel } from '../account.model';
import { Constants } from "../../app.constants";
@Injectable()
export class AccountCreateService {
  user: any;
  constructor(private http: Http) {
    this.user = JSON.parse(window.localStorage.getItem('userLoggedin'));
  }

  getAccount() {
    return this.http.get(Constants.URL + 'api/accountcharts').toPromise()
      .then(response => response.json() as AccountListModel)
      .catch(this.handleError);
  }

  postAccount(account) {
    account.user = this.user;
    return this.http.post(Constants.URL + 'api/orther/accountcharts', account).toPromise()
      .then(response => response.json() as AccountModel)
      .catch(this.handleError);
  }

  putAccount(account) {
    return this.http.put(Constants.URL + 'api/orther/accountcharts/' + account._id, account).toPromise()
      .then(response => response.json() as AccountModel)
      .catch(this.handleError);
  }
  // Error function
  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
