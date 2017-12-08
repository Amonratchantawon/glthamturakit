import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactCreateComponent } from "./contact-create.component";

const routes: Routes = [
    { path: '', component: ContactCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactListsRoutingModule { }
