import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { JvCreateRoutingModule } from "./jv-create-routing.module";
import { JvCreateComponent } from "./jv-create.component";

import { ComponentModule } from "../../shared/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    JvCreateRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [JvCreateComponent]
})
export class JvCreateModule { }
