import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JvCreateComponent } from "./jv-create.component";

const routes: Routes = [
    { path: '', component: JvCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JvCreateRoutingModule { }
