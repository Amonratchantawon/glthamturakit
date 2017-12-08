import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlReportComponent } from './gl-report.component';


const routes: Routes = [
    { path: '', component: GlReportComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlReportRoutingModule { }
