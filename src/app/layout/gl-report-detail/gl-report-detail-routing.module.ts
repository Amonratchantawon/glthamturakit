import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlReportDetailComponent } from './gl-report-detail.component';

const routes: Routes = [
    { path: '', component: GlReportDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlReportDetailRoutingModule { }
