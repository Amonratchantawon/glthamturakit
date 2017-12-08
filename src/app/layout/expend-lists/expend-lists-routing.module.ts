import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpendListsComponent } from "./expend-lists.component";

const routes: Routes = [
    { path: '', component: ExpendListsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpendListsRoutingModule { }
