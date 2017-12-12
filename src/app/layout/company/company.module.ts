import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompanyRoutingModule } from "./company-routing.module";
import { CompanyComponent } from "./company.component";

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyComponentModule { }
