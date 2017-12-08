import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RvListComponent } from './rv-list.component';

const routes: Routes = [
    { path: '', component: RvListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RvListRoutingModule { }
