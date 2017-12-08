import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvCreateComponent } from "./pv-create.component";

const routes: Routes = [
    { path: '', component: PvCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PvCreateRoutingModule { }
