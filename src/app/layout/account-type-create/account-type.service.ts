import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Constants } from "../../app.constants";
import { AccountTypeModel } from 'assets/models/account-type.model';

@Injectable()
export class AccountTypeService {
  user: any;

  constructor(
    private http: Http
  ) {
    this.user = JSON.parse(window.localStorage.getItem('userLoggedin'));
  }

  postAccountType(accountType) {
    accountType.user = this.user;
    return this.http.post(Constants.URL + 'api/accounttypes', accountType).toPromise()
      .then(response => response.json() as AccountTypeModel)
      .catch(this.handleError);
  }

  putAccountType(accountType) {
    accountType.user = this.user;
    return this.http.put(Constants.URL + 'api/accounttypes/' + accountType._id, accountType).toPromise()
      .then(response => response.json() as AccountTypeModel)
      .catch(this.handleError);
  }

  // Error function
  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
