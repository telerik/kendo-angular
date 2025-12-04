import { Component, ViewEncapsulation } from '@angular/core';
import { StockListComponent } from '../stock-list/stock-list.component';
import { StockChartComponent } from '../stock-chart/stock-chart.component';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';

@Component({
    selector: 'app-stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [StockListComponent, StockChartComponent, KENDO_LAYOUT]
})
export class StocksComponent {}
