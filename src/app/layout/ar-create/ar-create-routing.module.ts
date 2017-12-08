import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArCreateComponent } from "./ar-create.component";

const routes: Routes = [
    { path: '', component: ArCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArCreateRoutingModule { }
