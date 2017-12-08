import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'account-type-list', loadChildren: './account-type-list/account-type-list.module#AccountTypeListModule' },            
            { path: 'account-type-create', loadChildren: './account-type-create/account-type-create.module#AccountTypeCreateModule' },            
            { path: 'account', loadChildren: './account/account.module#AccountModule' },
            { path: 'account-create', loadChildren: './account-create/account-create.module#AccountCreateModule' },
            { path: 'expend-create', loadChildren: './expend-create/expend-create.module#ExpendCreateModule' },
            { path: 'expend-lists', loadChildren: './expend-lists/expend-lists.module#ExpendListsModule' },
            { path: 'contact-create', loadChildren: './contact-create/contact-create.module#ContactCreateModule' },
            { path: 'contact-lists', loadChildren: './contact-lists/contact-lists.module#ContactListsModule' },
            { path: 'ap-create', loadChildren: './ap-create/ap-create.module#ApCreateModule' },
            { path: 'ap-list', loadChildren: './ap-list/ap-list.module#ApListModule' },
            { path: 'ar-create', loadChildren: './ar-create/ar-create.module#ArCreateModule' },
            { path: 'ar-list', loadChildren: './ar-list/ar-list.module#ArListModule' },
            { path: 'pv-create', loadChildren: './pv-create/pv-create.module#PvCreateModule' },
            { path: 'pv-list', loadChildren: './pv-list/pv-list.module#PvListModule' },
            { path: 'rv-create', loadChildren: './rv-create/rv-create.module#RvCreateModule' },            
            { path: 'rv-list', loadChildren: './rv-list/rv-list.module#RvListModule' },            
            { path: 'jv-create', loadChildren: './jv-create/jv-create.module#JvCreateModule' },
            { path: 'jv-list', loadChildren: './jv-list/jv-list.module#JvListModule' },
            { path: 'sale-create', loadChildren: './sale-create/sale-create.module#SaleCreateModule' },
            { path: 'buy-create', loadChildren: './buy-create/buy-create.module#BuyCreateModule' },            
            { path: 'gl-report', loadChildren: './gl-report/gl-report.module#GlReportModule' },      
            { path: 'gl-report-view', loadChildren: './gl-report-view/gl-report-view.module#GlReportViewModule' },     
            { path: 'gl-report-detail', loadChildren: './gl-report-detail/gl-report-detail.module#GlReportDetailModule' }            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
