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
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { BadgeComponent } from './components/badge/badge.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StockDataService } from './services/stock-data.service';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DropDownListPopupSelectorDirective } from './directives/dropdownlist-popup-selector.directive';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import 'hammerjs';

import '@progress/kendo-ui';

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
            NumberFormatPipe,
            DropDownListPopupSelectorDirective
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
            DateInputsModule
        ],
        providers: [StockDataService],
        bootstrap: [AppComponent]
    })
export class AppModule { }
