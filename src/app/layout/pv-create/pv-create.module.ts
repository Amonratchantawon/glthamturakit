import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { PvCreateRoutingModule } from "./pv-create-routing.module";
import { PvCreateComponent } from "./pv-create.component";

import { ComponentModule } from "../../shared/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    PvCreateRoutingModule,
    TranslateModule,
    FormsModule,
    ComponentModule
  ],
  declarations: [PvCreateComponent]
})
export class PvCreateModule { }
