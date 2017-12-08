import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ArCreateRoutingModule } from "./ar-create-routing.module";
import { ArCreateComponent } from "./ar-create.component";

import { ComponentModule } from "../../shared/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ArCreateRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [ArCreateComponent]
})
export class ArCreateModule { }
