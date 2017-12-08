import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from "../../shared/components/components.module";

import { BuyCreateRoutingModule } from "./buy-create-routing.module";
import { BuyCreateComponent } from "./buy-create.component";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ComponentModule,
    BuyCreateRoutingModule
  ],
  declarations: [BuyCreateComponent]
})
export class BuyCreateModule { }
