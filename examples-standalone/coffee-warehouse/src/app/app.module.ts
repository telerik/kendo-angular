import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RatingComponent } from './components/team/rating.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/planning/cards/card.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InfoComponent } from './components/info/info.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './components/team/team.component';
import { CustomMessagesService } from './services/custom-messages.service';

import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { EditorModule } from '@progress/kendo-angular-editor';
import { FileSelectModule } from '@progress/kendo-angular-upload';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { MessageService } from '@progress/kendo-angular-l10n';

const drawerRoutes = [
    { path: '', component: TeamComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'planning', component: PlanningComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'info', component: InfoComponent }
];

import 'hammerjs';

import '@progress/kendo-angular-intl/locales/en/all';
import '@progress/kendo-angular-intl/locales/es/all';
import '@progress/kendo-angular-intl/locales/fr/all';

@NgModule({
    declarations: [
        AppComponent,
        RatingComponent,
        DashboardComponent,
        CardComponent,
        PlanningComponent,
        ProfileComponent,
        HeaderComponent,
        InfoComponent,
        TeamComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        GridModule,
        PDFModule,
        ExcelModule,
        LabelModule,
        LayoutModule,
        SchedulerModule,
        ButtonsModule,
        EditorModule,
        FileSelectModule,
        HttpClientModule,
        ChartsModule,
        IntlModule,
        DateInputsModule,
        InputsModule,
        DropDownsModule,
        RouterModule.forRoot(drawerRoutes),
        NotificationModule
    ],
    providers: [
        { provide: MessageService, useClass: CustomMessagesService },
        { provide: LOCALE_ID, useValue: 'en-US' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
