import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ComponentModule } from "../../shared/components/components.module";
import { RvListComponent } from './rv-list.component';
import { RvListRoutingModule } from './rv-list-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RvListRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [RvListComponent]
})
export class RvListModule { }
