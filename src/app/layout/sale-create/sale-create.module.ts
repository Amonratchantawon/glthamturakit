import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { SaleCreateRoutingModule } from "./sale-create-routing.module";
import { SaleCreateComponent } from "./sale-create.component";

import { ComponentModule } from "../../shared/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    SaleCreateRoutingModule,
    TranslateModule,
    FormsModule,
    ComponentModule
  ],
  declarations: [SaleCreateComponent]
})
export class SaleCreateModule { }
