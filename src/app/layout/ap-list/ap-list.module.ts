import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ComponentModule } from "../../shared/components/components.module";
import { ApListComponent } from './ap-list.component';
import { ApListRoutingModule } from './ap-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ApListRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [ApListComponent]
})
export class ApListModule { }
