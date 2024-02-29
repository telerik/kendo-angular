import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import '@progress/kendo-ui';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { BadgeComponent } from './components/badge/badge.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

import { StockDataService } from './services/stock-data.service';

import { NumberFormatPipe } from './pipes/number-format.pipe';
import { DropDownListPopupSelectorDirective } from './directives/dropdownlist-popup-selector.directive';
import { IconsModule } from '@progress/kendo-angular-icons';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        StocksComponent,
        StockListComponent,
        NavigationComponent,
        HeatmapComponent,
        BadgeComponent,
        UserProfileComponent,
        RealTimeDataComponent,
        StockChartComponent,
        StockDetailsComponent,
        NumberFormatPipe,
        DropDownListPopupSelectorDirective,
        ActionButtonsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DropDownsModule,
        BrowserAnimationsModule,
        LayoutModule,
        GridModule,
        ButtonsModule,
        ChartsModule,
        DialogsModule,
        DateInputsModule,
        FormsModule,
        IconsModule
    ],
    providers: [StockDataService],
    bootstrap: [AppComponent]
})
export class AppModule {}
