import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JvListComponent } from './jv-list.component';

const routes: Routes = [
    { path: '', component: JvListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JvListRoutingModule { }
