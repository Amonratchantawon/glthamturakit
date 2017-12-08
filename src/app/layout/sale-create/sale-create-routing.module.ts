import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleCreateComponent } from "./sale-create.component";

const routes: Routes = [
    { path: '', component: SaleCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SaleCreateRoutingModule { }
