import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app.constants";
@Injectable()
export class GlReportDetailService {

  constructor(private http: Http) { }

  getGlReportMonthById(id) {
    return this.http.get(Constants.URL + 'api/glmonths/' + id).toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  getGlReportYearById(id) {
    return this.http.get(Constants.URL + 'api/glyears/' + id).toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  // Error function
  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
