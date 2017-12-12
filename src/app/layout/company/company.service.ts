import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Constants } from "../../app.constants";
import { CompanyModel } from 'assets/models/company.model';

@Injectable()
export class CompanyService {

  constructor(private http: Http) { }

  getCompany() {
    return this.http.get(Constants.URL + 'api/companies').toPromise()
      .then(response => response.json() as CompanyModel)
      .catch(this.handleError);
  }
  postCompany(company) {
    return this.http.post(Constants.URL + 'api/companies', company).toPromise()
      .then(response => response.json() as CompanyModel)
      .catch(this.handleError);
  }

  upDateCompany(company) {
    return this.http.put(Constants.URL + 'api/companies/' + company._id, company).toPromise()
      .then(response => response.json() as CompanyModel)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
