import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpendCreateComponent } from "./expend-create.component";

const routes: Routes = [
    { path: '', component: ExpendCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpendCreateRoutingModule { }
