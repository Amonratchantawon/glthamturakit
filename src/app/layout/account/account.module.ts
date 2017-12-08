import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { AccountComponent } from "./account.component";
import { AccountRoutingModule } from "./account-routing.module";
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module

import { UiTree } from "../../shared/components/ui-tree/ui-tree";
@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    TranslateModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [AccountComponent, UiTree]
})
export class AccountModule { }
