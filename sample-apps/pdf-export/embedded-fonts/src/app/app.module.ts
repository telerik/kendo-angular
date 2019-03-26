import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PDFExportModule,
    GridModule,
    IntlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
