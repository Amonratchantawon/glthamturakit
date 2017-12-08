import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyCreateComponent } from "./buy-create.component";

const routes: Routes = [
    { path: '', component: BuyCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuyCreateRoutingModule { }
