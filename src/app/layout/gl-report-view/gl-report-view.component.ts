import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlReportViewService } from './gl-report-view.service';

@Component({
  selector: 'app-gl-report-view',
  templateUrl: './gl-report-view.component.html',
  styleUrls: ['./gl-report-view.component.scss']
})
export class GlReportViewComponent implements OnInit {
  glReportMonth: Object;
  glReportyear: Object;
  constructor(
    private glReportViewService: GlReportViewService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getGlReportMonth();
    this.getGlReportYear();
  }

  getGlReportMonth() {
    this.glReportViewService.getGlReportMonth().then((data) => {
      this.glReportMonth = data;
    }, (error) => {
      if (JSON.parse(error._body).message) {
        alert(JSON.parse(error._body).message);
      }
    });
  }

  getGlReportYear() {
    this.glReportViewService.getGlReportYear().then((data) => {
      this.glReportyear = data;
    }, (error) => {
      if (JSON.parse(error._body).message) {
        alert(JSON.parse(error._body).message);
      }
    });
  }

  glReportDetail(_id: string, type: string) {
    this.router.navigate(['/gl-report-detail'], { queryParams: { _id: _id, type: type } });
  }
}
