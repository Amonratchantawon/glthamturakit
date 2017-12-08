import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Constants } from "../../app.constants";

@Injectable()
export class GlReportViewService {

  constructor(private http: Http) {
  }

  getGlReportMonth() {
    return this.http.get(Constants.URL + 'api/glmonthsWithList').toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getGlReportYear() {
    return this.http.get(Constants.URL + 'api/glyearsWithList').toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  // Error function
  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
