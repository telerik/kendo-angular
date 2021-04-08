import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { EditorModule } from '@progress/kendo-angular-editor';
import { UploadModule } from '@progress/kendo-angular-upload';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MessageService } from '@progress/kendo-angular-l10n';

import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';
import { GridComponent } from './components/dashboard/grid/grid.component';
import { RatingComponent } from './components/dashboard/grid/rating.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/planning/card.component';
import { PlanningComponent } from './components/planning/planning.component';
import { SchedulerComponent } from './components/planning/scheduler.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './header/header.component';

import {CustomMessageService} from './services/message.service';

import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        ChartComponent,
        GridComponent,
        RatingComponent,
        DashboardComponent,
        CardComponent,
        PlanningComponent,
        SchedulerComponent,
        ProfileComponent,
        HeaderComponent
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
        UploadModule,
        HttpClientModule,
        ChartsModule,
        IntlModule,
        DateInputsModule,
        InputsModule,
        DropDownsModule
    ],
    providers:    [{ provide: MessageService, useClass: CustomMessageService }],
    bootstrap: [AppComponent]
})
export class AppModule {}
