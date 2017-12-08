import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountCreateComponent } from "./account-create.component";

const routes: Routes = [
    { path: '', component: AccountCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountCreateRoutingModule { }
