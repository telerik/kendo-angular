import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { TicketViewComponent } from "./ticket-view/ticket-view.component";
import { SpeakerViewComponent } from "./speaker-view/speaker-view.component";
import { SpreadsheetViewComponent } from "./spreadsheet-view/spreadsheet-view.component";
import { HeaderComponent } from "./header/header.component";

import { SpreadsheetModule } from "@progress/kendo-angular-spreadsheet";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { IconsModule } from "@progress/kendo-angular-icons";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ToolBarModule } from "@progress/kendo-angular-toolbar";
import { NotificationModule } from "@progress/kendo-angular-notification";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TicketViewComponent,
        SpeakerViewComponent,
        SpreadsheetViewComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SpreadsheetModule,
        InputsModule,
        ButtonsModule,
        LabelModule,
        DropDownsModule,
        NavigationModule,
        IconsModule,
        ToolBarModule,
        NotificationModule,
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/spreadsheet-app/'}],
    bootstrap: [AppComponent],
})
export class AppModule {}
