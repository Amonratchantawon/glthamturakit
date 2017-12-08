import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ComponentModule } from "../../shared/components/components.module";
import { PvListRoutingModule } from './pv-list-routing.module';
import { PvListComponent } from './pv-list.component';

@NgModule({
  imports: [
    CommonModule,
    PvListRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [PvListComponent]
})
export class PvListModule { }
