import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app.constants";
import { ContactModel } from 'assets/models/contact-create.model';
@Injectable()
export class ContactCreateService {
  user: any;
  constructor(private http: Http) {
    this.user = JSON.parse(window.localStorage.getItem('userLoggedin'));
  }

  postContact(contact) {
    contact.user = this.user;
    return this.http.post(Constants.URL + 'api/orther/contacts', contact).toPromise()
      .then(response => response.json() as ContactModel)
      .catch(this.handleError);
  }

  putContact(contact) {
    contact.user = this.user;
    return this.http.put(Constants.URL + 'api/orther/contacts/' + contact._id, contact).toPromise()
      .then(response => response.json() as ContactModel)
      .catch(this.handleError);
  }

  // Error function
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
