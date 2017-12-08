import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArListComponent } from './ar-list.component';

const routes: Routes = [
    { path: '', component: ArListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArListRoutingModule { }
