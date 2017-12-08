import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { PageHeaderModule } from './../../shared';
import { GlReportComponent } from './gl-report.component';
import { GlReportRoutingModule } from './gl-report-routing.module';
import { ComponentModule } from "../../shared/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    GlReportRoutingModule,
    PageHeaderModule,
    FormsModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [GlReportComponent]
})
export class GlReportModule { }
