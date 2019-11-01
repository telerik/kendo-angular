import { Component } from '@angular/core';

@Component({
    selector: 'app-stock-chart',
    templateUrl: './stock-chart.component.html',
    styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent {
    public range = { start: null, end: null };

    public timeFilters: Array<string> = ['1H', '4H', '12H', '1D', '4D', '1W'];

    public intervals: Array<string> = ['5M', '15M', '30M', '1H', '4H', '1D', '1W'];
    public selectedInterval = '1H';

    public chartType: 'candle' | 'line' | 'area' = 'candle';
    public charts: Array<{ text: string, value: string }> = [
        { text: 'Candle', value: 'candle' },
        { text: 'Line', value: 'line' },
        { text: 'Area', value: 'area' }
    ];

    public activeTimeFilter = '1H';

    public onTimeFilterClick(filter: string): void {
        if (this.activeTimeFilter === filter) { return; }
        this.activeTimeFilter = filter;
    }
}
