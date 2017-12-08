import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlReportDetailService } from './gl-report-detail.service';
import { GlReportModel } from 'assets/models/gl-report.model';

@Component({
  selector: 'app-gl-report-detail',
  templateUrl: './gl-report-detail.component.html',
  styleUrls: ['./gl-report-detail.component.scss']
})
export class GlReportDetailComponent implements OnInit {
  subParams: any;
  glReport: GlReportModel = new GlReportModel();
  constructor(
    private route: ActivatedRoute,
    private glReportDetailService: GlReportDetailService
  ) { }

  ngOnInit() {
    this.getParam();
  }

  getParam() {
    this.subParams = this.route
      .queryParams
      .subscribe(params => {
        let id = params['_id'];
        let type = params['type'];
        if ((id && id !== '') && (type && type !== '')) {
          if (type === 'month') {
            this.getGLMonthById(id);
          } else {
            this.getGLYearById(id);
          }
        }
      });
    this.subParams.unsubscribe();
  }

  getGLMonthById(id) {
    this.glReportDetailService.getGlReportMonthById(id).then((data) => {
      this.glReport = data;
    }, (error) => {
      alert(error);
    });
  }

  getGLYearById(id) {
    this.glReportDetailService.getGlReportYearById(id).then((data) => {
      this.glReport = data;
    }, (error) => {
      alert(error);
    });
  }

}
