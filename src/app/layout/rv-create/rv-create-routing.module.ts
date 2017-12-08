import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RvCreateComponent } from "./rv-create.component";

const routes: Routes = [
    { path: '', component: RvCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RvCreateRoutingModule { }
