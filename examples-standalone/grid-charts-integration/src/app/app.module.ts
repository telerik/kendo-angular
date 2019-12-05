import { NgModule, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ContextMenuModule } from '@progress/kendo-angular-menu';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NotificationModule, NOTIFICATION_CONTAINER } from '@progress/kendo-angular-notification';

import { ScatterBubbleChartComponent } from './charts/scatter-bubble-chart.component';
import { PieDonutStockComponent } from './charts/pie-donut-chart.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StocksChartComponent } from './charts/stocks-chart.component';
import { DayChartComponent } from './charts/day-chart.component';
import { WindowComponent } from './common/window.component';
import { SelectSeriesComponent } from './common/select-series.component';
import { SelectChartTypeComponent } from './common/select-chart-type.component';
import { SelectChartTypeBtnGroupComponent } from './common/select-chart-type-btngroup.component';
import { SelectSeriesBtnGroupComponent } from './common/select-series-btn-group.component';

import { NumberFormatPipe } from './pipes/number-format.pipe';

import 'hammerjs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        GridModule,
        ChartsModule,
        WindowModule,
        DropDownsModule,
        PopupModule,
        ContextMenuModule,
        InputsModule,
        NotificationModule,
        ButtonsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        StocksChartComponent,
        PieDonutStockComponent,
        ScatterBubbleChartComponent,
        DayChartComponent,
        WindowComponent,
        SelectSeriesComponent,
        SelectChartTypeComponent,
        NumberFormatPipe,
        StockListComponent,
        SelectChartTypeBtnGroupComponent,
        SelectSeriesBtnGroupComponent
    ],
    entryComponents: [
        StocksChartComponent,
        PieDonutStockComponent,
        ScatterBubbleChartComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
