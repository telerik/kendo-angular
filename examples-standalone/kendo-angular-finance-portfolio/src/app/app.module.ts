import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { StockListComponent } from './components/stock-list/stock-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StocksComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    LayoutModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
