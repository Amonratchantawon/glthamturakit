import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApCreateComponent } from "./ap-create.component";

const routes: Routes = [
    { path: '', component: ApCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApCreateRoutingModule { }
