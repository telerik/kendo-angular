import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GridModule } from '@progress/kendo-angular-grid';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TotalPortfolioComponent } from './total-portfolio/total-portfolio.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyPortfolioComponent,
    MainPanelComponent,
    GridComponent,
    TotalPortfolioComponent
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
    ButtonsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
