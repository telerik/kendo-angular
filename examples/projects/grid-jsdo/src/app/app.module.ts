import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataProviderService } from './data/service-config';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressServiceFactory } from './data/progress-service-factory';
import { ProgressSessionService } from './data/progress-session.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataProviderService,
    ProgressServiceFactory,
    ProgressSessionService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
