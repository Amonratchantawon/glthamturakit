import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpendListsRoutingModule } from "./expend-lists-routing.module";
import { ExpendListsComponent } from "./expend-lists.component";
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    ExpendListsRoutingModule,
    PageHeaderModule
  ],
  declarations: [ExpendListsComponent]
})
export class ExpendListsModule { }
