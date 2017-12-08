import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { RvCreateRoutingModule } from "./rv-create-routing.module";
import { RvCreateComponent } from "./rv-create.component";

import { ComponentModule } from "../../shared/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    RvCreateRoutingModule,
    TranslateModule,
    FormsModule,
    ComponentModule
  ],
  declarations: [RvCreateComponent]
})
export class RvCreateModule { }
