import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GridModule } from '@progress/kendo-angular-grid';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyPortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    NavigationModule,
    IndicatorsModule,
    IconsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
