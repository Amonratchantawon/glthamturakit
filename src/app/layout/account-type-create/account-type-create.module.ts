import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ComponentModule } from "../../shared/components/components.module";
import { AccountTypeCreateComponent } from './account-type-create.component';
import { AccountTypeCreateRoutingModule } from './account-type-create-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AccountTypeCreateRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [AccountTypeCreateComponent]
})
export class AccountTypeCreateModule { }
