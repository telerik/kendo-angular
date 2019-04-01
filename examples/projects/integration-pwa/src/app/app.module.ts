import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker'

// vendor dependencies
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Kendo UI
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';

// Components
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { IssuesComponent } from './issues/issues.component';
import { LabelClass } from './issues/label.directive';
import { MarkdownComponent } from './markdown/markdown.component';
import { ActiveIssuesComponent } from './charts/active-issues.component';
import { TypesDistributionComponent } from './charts/types-distribution.component';
import { IssueTypesComponent } from './charts/issue-types.component';
import { StatisticsComponent } from './charts/statistics.component';
import { LoadingComponent } from './shared/spinner.component'

//environment
import { environment } from '../environments/environment';


Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(<any>http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        LabelClass,
        AppComponent,
        MainMenuComponent,
        SigninComponent,
        DashboardComponent,
        ProfileComponent,
        IssuesComponent,
        MarkdownComponent,
        ActiveIssuesComponent,
        TypesDistributionComponent,
        IssueTypesComponent,
        StatisticsComponent,
        LoadingComponent
    ],
    imports: [
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserModule,
        ChartsModule,
        GridModule,
        DialogModule,
        InputsModule,
        ButtonsModule,
        LayoutModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClientModule]
            }
        })
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
