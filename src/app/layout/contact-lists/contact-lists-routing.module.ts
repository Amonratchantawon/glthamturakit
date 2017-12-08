import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListsComponent } from "./contact-lists.component";

const routes: Routes = [
    { path: '', component: ContactListsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactListsRoutingModule { }
