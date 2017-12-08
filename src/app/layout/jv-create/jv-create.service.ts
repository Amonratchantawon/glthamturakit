import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app.constants";
@Injectable()
export class JvCreateService {
  user: any;
  constructor(private http: Http) {
    this.user = JSON.parse(window.localStorage.getItem('userLoggedin'));
  }
  postJv(jv) {
    jv.user = this.user;
    return this.http.post(Constants.URL + 'api/orther/accounts', jv).toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  putJv(jv) {
    jv.user = this.user;
    return this.http.put(Constants.URL + 'api/orther/accounts/' + jv._id, jv).toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  searchAccount(id) {
    return this.http.get(Constants.URL + 'api/accounts/search/' + id).toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  // Error function
  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
