import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExpendCreateRoutingModule } from "./expend-create-routing.module";
import { ExpendCreateComponent } from "./expend-create.component";
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    ExpendCreateRoutingModule,
    PageHeaderModule,
    FormsModule
  ],
  declarations: [ExpendCreateComponent]
})
export class ExpendCreateModule { }
