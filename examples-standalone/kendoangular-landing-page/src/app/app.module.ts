import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Kendo UI for Angular modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { IconsModule } from '@progress/kendo-angular-icons';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

import 'hammerjs';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    NavigationModule,
    LayoutModule,
    ChartsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    DialogsModule,
    IconsModule
  ],
  providers: [
    provideRouter(routes)
  ],
  bootstrap: []
})
export class AppModule { }