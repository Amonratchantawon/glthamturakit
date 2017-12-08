import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule } from './../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { GlReportDetailRoutingModule } from './gl-report-detail-routing.module';
import { GlReportDetailComponent } from './gl-report-detail.component';
import { ComponentModule } from "../../shared/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    GlReportDetailRoutingModule,
    PageHeaderModule,
    FormsModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [GlReportDetailComponent]
})
export class GlReportDetailModule { }
