import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ComponentModule } from "../../shared/components/components.module";
import { JvListComponent } from './jv-list.component';
import { JvListRoutingModule } from './jv-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    JvListRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [JvListComponent]
})
export class JvListModule { }
