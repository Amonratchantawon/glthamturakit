import { GlReportService } from './layout/gl-report/gl-report.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the Search

import { LoginService } from "./login/login.service";
import { SignupService } from "./signup/signup.service";
import { ContactCreateService } from "./layout/contact-create/contact-create.service";
import { ContactListsService } from "./layout/contact-lists/contact-lists.service";
import { ExpendCreateService } from "./layout/expend-create/expend-create.service";
import { ExpendListsService } from "./layout/expend-lists/expend-lists.service";
import { AccountCreateService } from "./layout/account-create/account-create.service";
import { AccountService } from "./layout/account/account.service";
import { JvCreateService } from "./layout/jv-create/jv-create.service";
import { AccountTypeService } from './layout/account-type-create/account-type.service';
import { AccountTypeListService } from './layout/account-type-list/account-type-list.service';
import { GlReportViewService } from './layout/gl-report-view/gl-report-view.service';
import { GlReportDetailService } from './layout/gl-report-detail/gl-report-detail.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        Ng2SearchPipeModule,//importing the Search
        NgProgressModule,
        HttpModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [
        { provide: BrowserXhr, useClass: NgProgressBrowserXhr },
        AuthGuard,
        LoginService,
        SignupService,
        ContactCreateService,
        ContactListsService,
        ExpendCreateService,
        ExpendListsService,
        AccountCreateService,
        AccountService,
        JvCreateService,
        GlReportService,
        AccountTypeService,
        AccountTypeListService,
        GlReportViewService,
        GlReportDetailService        
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
