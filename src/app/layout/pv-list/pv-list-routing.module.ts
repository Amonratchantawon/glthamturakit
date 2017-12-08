import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvListComponent } from './pv-list.component';

const routes: Routes = [
    { path: '', component: PvListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PvListRoutingModule { }
