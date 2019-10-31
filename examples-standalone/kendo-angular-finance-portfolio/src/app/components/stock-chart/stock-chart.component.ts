import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stock-chart',
    templateUrl: './stock-chart.component.html',
    styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent {
    public intervals: Array<string> = ['5M', '15M', '30M', '1H', '4H', '1D', '1W'];
    public range = { start: null, end: null };
    public selectedInterval = '1H';

    public selectedChart = 'Candle';
    public charts: Array<string> = ['Candle', 'Line', 'Area'];
}
