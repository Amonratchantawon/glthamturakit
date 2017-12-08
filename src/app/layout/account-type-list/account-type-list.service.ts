import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Constants } from "../../app.constants";
import { AccountTypeModel } from 'assets/models/account-type.model';
@Injectable()
export class AccountTypeListService {

  constructor(
    private http: Http
  ) { }

  getAccountTypeList() {
    return this.http.get(Constants.URL + 'api/accounttypes').toPromise()
      .then(response => response.json() as Array<AccountTypeModel>)
      .catch(this.handleError);
  }

  deleteAccountType(id) {
    return this.http.delete(Constants.URL + 'api/accounttypes/' + id).toPromise()
      .then(response => response.json() as AccountTypeModel)
      .catch(this.handleError);
  }

  // Error function
  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
