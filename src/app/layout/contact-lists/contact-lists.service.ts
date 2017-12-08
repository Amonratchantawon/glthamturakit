import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app.constants";
import { ContactModel } from 'assets/models/contact-create.model';
@Injectable()
export class ContactListsService {
  constructor(private http: Http) {
  }

  getContacts() {
    return this.http.get(Constants.URL + 'api/contacts').toPromise()
      .then(response => response.json() as ContactModel)
      .catch(this.handleError);
  }
  deleteContacts(_id) {
    return this.http.delete(Constants.URL + 'api/orther/contacts/' + _id).toPromise()
      .then(response => response.json() as ContactModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
