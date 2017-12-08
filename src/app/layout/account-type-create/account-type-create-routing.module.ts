import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountTypeCreateComponent } from './account-type-create.component';

const routes: Routes = [
    { path: '', component: AccountTypeCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountTypeCreateRoutingModule { }
