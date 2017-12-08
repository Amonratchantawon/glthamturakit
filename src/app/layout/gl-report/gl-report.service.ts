import { GlReportModel } from './../../../assets/models/gl-report.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app.constants";

@Injectable()
export class GlReportService {

  constructor(private http: Http) {

  }

  getGlReport(glTyp, glDate) {
    // return this.http.get('./assets/JSON/gl-report.json').toPromise()    
    return this.http.get(Constants.URL + 'api/glreport/' + glTyp + '/' + glDate).toPromise()
      .then(response => response.json() as GlReportModel)
      .catch(this.handleError);
  }

  postGlReportMonth(gl) {
    return this.http.post(Constants.URL + 'api/glmonths', gl).toPromise()
      .then(response => response.json() as GlReportModel)
      .catch(this.handleError);
  }

  postGlReportYear(gl) {
    return this.http.post(Constants.URL + 'api/glyears', gl).toPromise()
      .then(response => response.json() as GlReportModel)
      .catch(this.handleError);
  }

  putGlReportMonth(gl) {
    return this.http.post(Constants.URL + 'api/glmonths/' + gl._id, gl).toPromise()
      .then(response => response.json() as GlReportModel)
      .catch(this.handleError);
  }

  putGlReportYear(gl) {
    return this.http.post(Constants.URL + 'api/glyears/' + gl._id, gl).toPromise()
      .then(response => response.json() as GlReportModel)
      .catch(this.handleError);
  }
  // Error function
  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
