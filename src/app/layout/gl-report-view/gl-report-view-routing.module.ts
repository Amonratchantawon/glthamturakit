import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlReportViewComponent } from './gl-report-view.component';

const routes: Routes = [
    { path: '', component: GlReportViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlReportViewRoutingModule { }
