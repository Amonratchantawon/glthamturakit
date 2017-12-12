import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompanyRoutingModule } from "./company-routing.module";
import { CompanyComponent } from "./company.component";
import { CompanyService } from 'app/layout/company/company.service';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [CompanyComponent],
  providers:[
    CompanyService
  ]
})
export class CompanyComponentModule { }
