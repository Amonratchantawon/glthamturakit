import { GlReportModel } from './../../../assets/models/gl-report.model';
import { GlReportService } from './gl-report.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gl-report',
  templateUrl: './gl-report.component.html',
  styleUrls: ['./gl-report.component.scss']
})
export class GlReportComponent implements OnInit {
  glReport: GlReportModel = new GlReportModel;
  glType: string = 'month';
  month: Date;
  year: number = new Date().getFullYear();
  startDate:Date;
  endDate:Date;
  currentLang: string;

  constructor(
    private glReportService: GlReportService,
    private translate: TranslateService
  ) {

  }

  ngOnInit() {
  }

  genGlReport() {
    this.getGlReport();
  }

  getGlReport() {

    let glDate;
    let glEndDate;
    if (this.glType === 'month') {
      if (!this.month) {
        this.currentLang = this.translate.currentLang;
        if (this.currentLang === 'th') {
          alert('กรุณาระบุเดือน');
        } else {
          alert('Please fill month');
        }
        return false;
      }
      glDate = this.month;
    } else if(this.glType === 'year') {
      glDate = new Date(this.year, 1, 1);
    }else{
        glDate =this.startDate,
        glEndDate =this.endDate
    }

    this.glReportService.getGlReport(this.glType, glDate, glEndDate).then((gl) => {
      this.glReport = gl;
    }, (error) => {
      alert(JSON.stringify(error));
    })

  }

  closeGlReport() {
    this.currentLang = this.translate.currentLang;
    let statementname;
    if (this.currentLang === 'th') {
      let res = confirm('คุณต้องการปิดงบรายการนี้?');
      if (!res) {
        return;
      }
      statementname = prompt("กรุณาระบุชื่อรายการ", "");
    } else {
      let res = confirm('Would you like to closing statements?');
      if (!res) {
        return;
      }
      statementname = prompt("Please enter your statements name", "");
    }
    
    if (statementname === '') {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุชื่อรายการ');
      } else {
        alert('Please enter your statements name');
      }
      return;
    } else if (statementname) {
      this.glReport.statementname = statementname;

      if (this.glType === 'month') {
        this.closeCreateMonth();
      } else {
        this.closeCreateYear();
      }
    }

  }

  closeCreateMonth() {
    this.glReportService.postGlReportMonth(this.glReport).then((data) => {
      this.glReport = data;
      this.currentLang = this.translate.currentLang;
      if (this.currentLang === 'th') {
        alert('ปิดงบรายเดือนสำเร็จ');
      } else {
        alert('Closing statements complete.');
      }
    }, (error) => {
      if (JSON.parse(error._body).message) {
        alert(JSON.parse(error._body).message);
      }
    });
  }

  closeCreateYear() {
    this.glReportService.postGlReportYear(this.glReport).then((data) => {
      this.glReport = data;
      this.currentLang = this.translate.currentLang;
      if (this.currentLang === 'th') {
        alert('ปิดงบรายปีสำเร็จ');
      } else {
        alert('Closing statements complete.');
      }
    }, (error) => {
      if (JSON.parse(error._body).message) {
        alert(JSON.parse(error._body).message);
      }
    });
  }

}
