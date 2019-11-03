import { Component } from '@angular/core';
import { MS_PER_DAY, getDate, addDays, addMonths } from '@progress/kendo-date-math';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';
import { ItemArgs } from '@progress/kendo-angular-dropdowns';

import { Interval } from '../../models';
import { StockDataService } from '../../services/stock-data.service';
import { dateInRange } from '../../pipes/helpers';

export const isDateInRange = (candidate: Date, min: Date, max: Date): boolean => (
    !candidate || !((min && min > candidate) || (max && max < candidate))
);

const normalizeSelectionRange = (start: Date, end: Date, min: Date, max: Date): SelectionRange => {
    if (!(start && end && isDateInRange(start, min, max) && isDateInRange(end, min, max))) {
        return { start: null, end: null };
    }

    const normalizedStart = getDate(start);
    const normalizedEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59, 999);

    return {
        start: dateInRange(normalizedStart, min, max),
        end: dateInRange(normalizedEnd, min, max)
    };
};

const rangeAndIntervalCompatible = (rangeDuration: number, intervalDuration: number) => {
    // disallow the selection of intervals greater than the currently selected range
    const intervalGreaterThanRange = intervalDuration > rangeDuration;

    // disallow the selection of intervals smaller than 1 hour for ranges greater than 3 days
    const intervalTooSmallForRange = rangeDuration > (MS_PER_DAY * 3) && intervalDuration < (MS_PER_DAY / 24);

    return !intervalGreaterThanRange && !intervalTooSmallForRange;
};

@Component({
    selector: 'app-stock-chart',
    templateUrl: './stock-chart.component.html',
    styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent {
    public range: SelectionRange = { start: null, end: null };
    public normalizedRange: SelectionRange = { start: addDays(new Date(), -4), end: new Date() };

    public calendarMin = addMonths(new Date(), -6);
    public calendarMax = new Date();

    public timeFilters: Array<{ name: string, duration: number }> = [
        { name: '1H', duration: MS_PER_DAY / 24 },
        { name: '4H', duration: MS_PER_DAY / 6 },
        { name: '12H', duration: MS_PER_DAY / 2 },
        { name: '1D', duration: MS_PER_DAY },
        { name: '4D', duration: MS_PER_DAY * 4 },
        { name: '1W', duration: MS_PER_DAY * 7 }
    ];
    public activeTimeFilter = this.timeFilters[4].duration;

    public intervals: Array<{ name: string, interval: Interval, duration: number }> = [
        { name: '5M', interval: { unit: 'minutes', step: 5 }, duration: MS_PER_DAY / 24 / 12 },
        { name: '15M', interval: { unit: 'minutes', step: 15 }, duration: MS_PER_DAY / 24 / 4 },
        { name: '30M', interval: { unit: 'minutes', step: 30 }, duration: MS_PER_DAY / 24 / 2 },
        { name: '1H', interval: { unit: 'hours', step: 1 }, duration: MS_PER_DAY / 24 },
        { name: '4H', interval: { unit: 'hours', step: 4 }, duration: MS_PER_DAY / 6 },
        { name: '1D', interval: { unit: 'days', step: 1 }, duration: MS_PER_DAY },
        { name: '1W', interval: { unit: 'weeks', step: 1 }, duration: MS_PER_DAY * 7 }
    ];
    public selectedInterval: { name: string, interval: Interval, duration: number } = this.intervals[3];

    public chartType: 'candle' | 'line' | 'area' = 'candle';
    public charts: Array<{ text: string, value: string }> = [
        { text: 'Candle', value: 'candle' },
        { text: 'Line', value: 'line' },
        { text: 'Area', value: 'area' }
    ];

    private displayedDuration: number = this.activeTimeFilter;

    constructor(public stockDataService: StockDataService) { }

    public disableIncompatibleIntervals = (args: ItemArgs): boolean => {
        return !rangeAndIntervalCompatible(this.displayedDuration, args.dataItem.duration);
    }

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

        this.displayedDuration = duration;
        this.selectFirstCompatibleInterval(duration);
    }

    public handleRangeChange(start: Date, end: Date): void {
        this.normalizedRange = normalizeSelectionRange(start, end, this.calendarMin, this.calendarMax);

        if (this.normalizedRange.start && this.normalizedRange.end) {
            this.activeTimeFilter = null;
            this.displayedDuration = this.normalizedRange.end.getTime() - this.normalizedRange.start.getTime();
            this.selectFirstCompatibleInterval(this.displayedDuration);
        }
    }

    public selectFirstCompatibleInterval(displayedDuration: number): void {
        if (rangeAndIntervalCompatible(displayedDuration, this.selectedInterval.duration)) {
            return;
        }

        const firstCompatibleInterval = this.intervals.find(interval => rangeAndIntervalCompatible(displayedDuration, interval.duration));
        if (firstCompatibleInterval) {
            this.selectedInterval = firstCompatibleInterval;
        }
    }
}
