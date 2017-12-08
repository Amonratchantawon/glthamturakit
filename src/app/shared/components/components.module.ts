import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { AccountHeaderComponent } from "./account-header/account-header.component";
import { AccountDropdownComponent } from './account-dropdown/account-dropdown.component';
import { AccountFormComponent } from "./account-form/account-form.component";
import { AccountFormItemsComponent } from './account-form-items/account-form-items.component';
import { GlComponent } from './gl/gl.component';
@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        NgbModule.forRoot(),
        DateValueAccessorModule,
        Ng2CompleterModule
    ],
    declarations: [AccountHeaderComponent, AccountDropdownComponent, AccountFormComponent, AccountFormItemsComponent, GlComponent],
    exports: [AccountHeaderComponent, AccountDropdownComponent, AccountFormComponent, AccountFormItemsComponent, GlComponent]
})
export class ComponentModule { }
