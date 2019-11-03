import { Component } from '@angular/core';
import { MS_PER_DAY, getDate, addDays, isEqual } from '@progress/kendo-date-math';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';

import { Interval } from '../../models';
import { StockDataService } from '../../services/stock-data.service';

const normalizeSelectionRange = (start: Date, end: Date): SelectionRange => {
    if (!(start && end)) {
        return { start: null, end: null };
    }

    const isTodaySelected = isEqual(getDate(end), getDate(new Date()));

    const normalizedStart = getDate(start);
    const normalizedEnd = isTodaySelected ? new Date() : new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59, 999);

    return {
        start: normalizedStart,
        end: normalizedEnd
    };
};

@Component({
    selector: 'app-stock-chart',
    templateUrl: './stock-chart.component.html',
    styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent {
    public range: SelectionRange = { start: null, end: null };
    public normalizedRange: SelectionRange = { start: addDays(new Date(), -1), end: new Date() };
    public calendarMax = new Date();

    public timeFilters: Array<{ name: string, duration: number }> = [
        { name: '1H', duration: MS_PER_DAY / 24 },
        { name: '4H', duration: MS_PER_DAY / 6 },
        { name: '12H', duration: MS_PER_DAY / 2 },
        { name: '1D', duration: MS_PER_DAY },
        { name: '4D', duration: MS_PER_DAY * 4 },
        { name: '1W', duration: MS_PER_DAY * 7 },
    ];
    public activeTimeFilter = this.timeFilters[3].duration;

    public intervals: Array<{ name: string, interval: Interval }> = [
        { name: '5M', interval: { unit: 'minutes', step: 5 } },
        { name: '15M', interval: { unit: 'minutes', step: 15 } },
        { name: '30M', interval: { unit: 'minutes', step: 30 } },
        { name: '1H', interval: { unit: 'hours', step: 1 } },
        { name: '4H', interval: { unit: 'hours', step: 4 } },
        { name: '1D', interval: { unit: 'days', step: 1 } },
        { name: '1W', interval: { unit: 'weeks', step: 1 } }
    ];
    public selectedInterval: { name: string, interval: Interval } = this.intervals[3];

    public chartType: 'candle' | 'line' | 'area' = 'candle';
    public charts: Array<{ text: string, value: string }> = [
        { text: 'Candle', value: 'candle' },
        { text: 'Line', value: 'line' },
        { text: 'Area', value: 'area' }
    ];

    constructor(public stockDataService: StockDataService) { }

    public onTimeFilterClick(duration: number): void {
        if (this.activeTimeFilter === duration) {
            return;
        }

        this.activeTimeFilter = duration;
        this.range = { start: null, end: null };

        this.normalizedRange = {
            start: new Date(new Date().getTime() - duration),
            end: new Date()
        };
    }

    public handleRangeChange(start: Date, end: Date): void {
        if (start && end) {
            this.activeTimeFilter = null;
        }

        this.normalizedRange = normalizeSelectionRange(start, end);
    }
}
