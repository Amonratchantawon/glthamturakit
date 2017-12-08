import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ComponentModule } from "../../shared/components/components.module";
import { AccountTypeListRoutingModule } from './account-type-list-routing.module';
import { AccountTypeListComponent } from './account-type-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the Search

@NgModule({
  imports: [
    CommonModule,
    AccountTypeListRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [AccountTypeListComponent]
})
export class AccountTypeListModule { }
