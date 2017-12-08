import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app.constants";
import { ExpendModel } from 'assets/models/expend-create.model';
@Injectable()
export class ExpendCreateService {
  user: any;
  constructor(private http: Http) {
    this.user = JSON.parse(window.localStorage.getItem('userLoggedin'));
  }

  postExpend(expend) {
    expend.user = this.user;
    return this.http.post(Constants.URL + 'api/orther/expends', expend).toPromise()
      .then(response => response.json() as ExpendModel)
      .catch(this.handleError);
  }

  putExpend(expend) {
    expend.user = this.user;
    return this.http.put(Constants.URL + 'api/orther/expends/' + expend._id, expend).toPromise()
      .then(response => response.json() as ExpendModel)
      .catch(this.handleError);
  }

  // Error function
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
