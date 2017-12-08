import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ComponentModule } from "../../shared/components/components.module";
import { ArListRoutingModule } from './ar-list-routing.module';
import { ArListComponent } from './ar-list.component';

@NgModule({
  imports: [
    CommonModule,
    ArListRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [ArListComponent]
})
export class ArListModule { }
