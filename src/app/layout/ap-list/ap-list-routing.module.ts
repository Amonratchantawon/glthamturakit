import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApListComponent } from './ap-list.component';

const routes: Routes = [
    { path: '', component: ApListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApListRoutingModule { }
