import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges } from '@angular/core';
import { PlotBand, BaseUnit } from '@progress/kendo-angular-charts';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';
import { StockDataService } from 'src/app/services/stock-data.service';

import { StockIntervalDetails } from 'src/app/models';

// tslint:disable
const data: StockIntervalDetails[] = [
    {
        "date": "2019-10-30T07:00:00.000Z",
        "open": 40,
        "close": 39.86,
        "high": 40,
        "low": 39.77,
        "volume": 891
    },
    {
        "date": "2019-10-30T07:05:00.000Z",
        "open": 39.72,
        "close": 39.69,
        "high": 39.72,
        "low": 39.69,
        "volume": 891
    },
    {
        "date": "2019-10-30T07:10:00.000Z",
        "open": 39.6,
        "close": 39.69,
        "high": 39.69,
        "low": 39.6,
        "volume": 814
    },
    {
        "date": "2019-10-30T07:15:00.000Z",
        "open": 39.72,
        "close": 39.72,
        "high": 39.72,
        "low": 39.72,
        "volume": 292
    },
    {
        "date": "2019-10-30T07:20:00.000Z",
        "open": 39.74,
        "close": 39.74,
        "high": 39.74,
        "low": 39.74,
        "volume": 445
    },
    {
        "date": "2019-10-30T07:25:00.000Z",
        "open": 39.68,
        "close": 39.68,
        "high": 39.68,
        "low": 39.65,
        "volume": 728
    },
    {
        "date": "2019-10-30T07:30:00.000Z",
        "open": 40,
        "close": 39.86,
        "high": 40,
        "low": 39.77,
        "volume": 891
    },
    {
        "date": "2019-10-30T07:35:00.000Z",
        "open": 39.72,
        "close": 39.69,
        "high": 39.72,
        "low": 39.69,
        "volume": 891
    },
    {
        "date": "2019-10-30T07:40:00.000Z",
        "open": 39.6,
        "close": 39.69,
        "high": 39.69,
        "low": 39.6,
        "volume": 814
    },
    {
        "date": "2019-10-30T07:45:00.000Z",
        "open": 39.72,
        "close": 39.72,
        "high": 39.72,
        "low": 39.72,
        "volume": 292
    },
    {
        "date": "2019-10-30T07:50:00.000Z",
        "open": 39.74,
        "close": 39.74,
        "high": 39.74,
        "low": 39.74,
        "volume": 445
    },
    {
        "date": "2019-10-30T07:55:00.000Z",
        "open": 39.68,
        "close": 39.68,
        "high": 39.68,
        "low": 39.65,
        "volume": 728
    },
    {
        "date": "2019-10-30T08:00:00.000Z",
        "open": 39.68,
        "close": 39.5,
        "high": 39.68,
        "low": 39.5,
        "volume": 1982
    },
    {
        "date": "2019-10-30T08:05:00.000Z",
        "open": 39.45,
        "close": 39.45,
        "high": 39.45,
        "low": 39.45,
        "volume": 105
    },
    {
        "date": "2019-10-30T08:10:00.000Z",
        "open": 39.55,
        "close": 39.55,
        "high": 39.55,
        "low": 39.48,
        "volume": 839
    },
    {
        "date": "2019-10-30T08:15:00.000Z",
        "open": 39.55,
        "close": 39.55,
        "high": 39.55,
        "low": 39.48,
        "volume": 839
    },
    {
        "date": "2019-10-30T08:20:00.000Z",
        "open": 39.61,
        "close": 39.65,
        "high": 39.74,
        "low": 39.61,
        "volume": 1592
    },
    {
        "date": "2019-10-30T08:25:00.000Z",
        "open": 39.61,
        "close": 39.65,
        "high": 39.74,
        "low": 39.61,
        "volume": 1592
    },
    {
        "date": "2019-10-30T08:30:00.000Z",
        "open": 39.6,
        "close": 39.63,
        "high": 39.63,
        "low": 39.6,
        "volume": 204
    },
    {
        "date": "2019-10-30T08:35:00.000Z",
        "open": 39.67,
        "close": 39.76,
        "high": 39.76,
        "low": 39.67,
        "volume": 559
    },
    {
        "date": "2019-10-30T08:40:00.000Z",
        "open": 39.79,
        "close": 39.79,
        "high": 39.79,
        "low": 39.74,
        "volume": 520
    },
    {
        "date": "2019-10-30T08:45:00.000Z",
        "open": 39.88,
        "close": 39.89,
        "high": 39.89,
        "low": 39.88,
        "volume": 592
    },
    {
        "date": "2019-10-30T08:50:00.000Z",
        "open": 39.92,
        "close": 39.87,
        "high": 39.92,
        "low": 39.87,
        "volume": 1249
    },
    {
        "date": "2019-10-30T08:55:00.000Z",
        "open": 39.9,
        "close": 39.86,
        "high": 39.9,
        "low": 39.86,
        "volume": 704
    },
    {
        "date": "2019-10-30T09:00:00.000Z",
        "open": 39.9,
        "close": 39.85,
        "high": 39.9,
        "low": 39.85,
        "volume": 2477
    },
    {
        "date": "2019-10-30T09:05:00.000Z",
        "open": 39.9,
        "close": 39.85,
        "high": 39.9,
        "low": 39.85,
        "volume": 2477
    },
    {
        "date": "2019-10-30T09:10:00.000Z",
        "open": 39.85,
        "close": 39.85,
        "high": 39.85,
        "low": 39.85,
        "volume": 279
    },
    {
        "date": "2019-10-30T09:15:00.000Z",
        "open": 39.85,
        "close": 39.85,
        "high": 39.85,
        "low": 39.85,
        "volume": 279
    },
    {
        "date": "2019-10-30T09:20:00.000Z",
        "open": 39.87,
        "close": 39.85,
        "high": 39.87,
        "low": 39.85,
        "volume": 521
    },
    {
        "date": "2019-10-30T09:25:00.000Z",
        "open": 39.86,
        "close": 39.86,
        "high": 39.86,
        "low": 39.86,
        "volume": 456
    },
    {
        "date": "2019-10-30T09:30:00.000Z",
        "open": 39.87,
        "close": 39.87,
        "high": 39.87,
        "low": 39.87,
        "volume": 395
    },
    {
        "date": "2019-10-30T09:35:00.000Z",
        "open": 39.87,
        "close": 39.92,
        "high": 39.92,
        "low": 39.87,
        "volume": 855
    },
    {
        "date": "2019-10-30T09:40:00.000Z",
        "open": 39.92,
        "close": 39.88,
        "high": 39.92,
        "low": 39.88,
        "volume": 1576
    },
    {
        "date": "2019-10-30T09:45:00.000Z",
        "open": 39.84,
        "close": 39.86,
        "high": 39.86,
        "low": 39.84,
        "volume": 413
    },
    {
        "date": "2019-10-30T09:50:00.000Z",
        "open": 39.85,
        "close": 39.83,
        "high": 39.85,
        "low": 39.79,
        "volume": 841
    },
    {
        "date": "2019-10-30T09:55:00.000Z",
        "open": 39.86,
        "close": 39.82,
        "high": 39.86,
        "low": 39.81,
        "volume": 733
    },
    {
        "date": "2019-10-30T10:00:00.000Z",
        "open": 39.84,
        "close": 39.83,
        "high": 39.84,
        "low": 39.83,
        "volume": 1644
    },
    {
        "date": "2019-10-30T10:05:00.000Z",
        "open": 39.84,
        "close": 39.83,
        "high": 39.84,
        "low": 39.83,
        "volume": 1644
    },
    {
        "date": "2019-10-30T10:10:00.000Z",
        "open": 39.92,
        "close": 39.95,
        "high": 39.95,
        "low": 39.92,
        "volume": 731
    },
    {
        "date": "2019-10-30T10:15:00.000Z",
        "open": 39.94,
        "close": 39.94,
        "high": 39.94,
        "low": 39.92,
        "volume": 1797
    },
    {
        "date": "2019-10-30T10:20:00.000Z",
        "open": 39.9,
        "close": 39.9,
        "high": 39.93,
        "low": 39.9,
        "volume": 1042
    },
    {
        "date": "2019-10-30T10:25:00.000Z",
        "open": 39.94,
        "close": 39.94,
        "high": 39.94,
        "low": 39.92,
        "volume": 846
    },
    {
        "date": "2019-10-30T10:30:00.000Z",
        "open": 39.94,
        "close": 39.94,
        "high": 39.94,
        "low": 39.94,
        "volume": 475
    },
    {
        "date": "2019-10-30T10:35:00.000Z",
        "open": 39.97,
        "close": 39.94,
        "high": 40,
        "low": 39.94,
        "volume": 2928
    },
    {
        "date": "2019-10-30T10:40:00.000Z",
        "open": 39.94,
        "close": 39.95,
        "high": 39.95,
        "low": 39.94,
        "volume": 342
    },
    {
        "date": "2019-10-30T10:45:00.000Z",
        "open": 39.94,
        "close": 39.97,
        "high": 39.97,
        "low": 39.94,
        "volume": 230
    },
    {
        "date": "2019-10-30T10:50:00.000Z",
        "open": 39.96,
        "close": 39.96,
        "high": 39.96,
        "low": 39.89,
        "volume": 2026
    },
    {
        "date": "2019-10-30T10:55:00.000Z",
        "open": 39.94,
        "close": 39.94,
        "high": 39.94,
        "low": 39.94,
        "volume": 114
    },
    {
        "date": "2019-10-30T11:00:00.000Z",
        "open": 39.94,
        "close": 39.93,
        "high": 39.94,
        "low": 39.92,
        "volume": 598
    },
    {
        "date": "2019-10-30T11:05:00.000Z",
        "open": 39.91,
        "close": 39.91,
        "high": 39.91,
        "low": 39.91,
        "volume": 269
    },
    {
        "date": "2019-10-30T11:10:00.000Z",
        "open": 39.89,
        "close": 39.89,
        "high": 39.89,
        "low": 39.89,
        "volume": 315
    },
    {
        "date": "2019-10-30T11:15:00.000Z",
        "open": 39.92,
        "close": 39.92,
        "high": 39.92,
        "low": 39.92,
        "volume": 437
    },
    {
        "date": "2019-10-30T11:20:00.000Z",
        "open": 39.92,
        "close": 39.93,
        "high": 39.93,
        "low": 39.92,
        "volume": 755
    },
    {
        "date": "2019-10-30T11:25:00.000Z",
        "open": 39.93,
        "close": 39.96,
        "high": 39.96,
        "low": 39.93,
        "volume": 1088
    },
    {
        "date": "2019-10-30T11:30:00.000Z",
        "open": 39.95,
        "close": 39.95,
        "high": 39.95,
        "low": 39.95,
        "volume": 233
    },
    {
        "date": "2019-10-30T11:35:00.000Z",
        "open": 39.93,
        "close": 39.93,
        "high": 39.93,
        "low": 39.93,
        "volume": 932
    },
    {
        "date": "2019-10-30T11:40:00.000Z",
        "open": 39.93,
        "close": 39.92,
        "high": 39.93,
        "low": 39.92,
        "volume": 575
    },
    {
        "date": "2019-10-30T11:45:00.000Z",
        "open": 39.89,
        "close": 39.93,
        "high": 39.94,
        "low": 39.89,
        "volume": 1338
    },
    {
        "date": "2019-10-30T11:50:00.000Z",
        "open": 39.9,
        "close": 39.9,
        "high": 39.9,
        "low": 39.89,
        "volume": 857
    },
    {
        "date": "2019-10-30T11:55:00.000Z",
        "open": 39.91,
        "close": 39.96,
        "high": 39.96,
        "low": 39.91,
        "volume": 593
    },
    {
        "date": "2019-10-30T12:00:00.000Z",
        "open": 39.88,
        "close": 39.88,
        "high": 39.88,
        "low": 39.88,
        "volume": 144
    },
    {
        "date": "2019-10-30T12:05:00.000Z",
        "open": 39.88,
        "close": 39.9,
        "high": 39.9,
        "low": 39.79,
        "volume": 552
    },
    {
        "date": "2019-10-30T12:10:00.000Z",
        "open": 39.88,
        "close": 39.88,
        "high": 39.93,
        "low": 39.87,
        "volume": 970
    },
    {
        "date": "2019-10-30T12:15:00.000Z",
        "open": 39.98,
        "close": 39.94,
        "high": 39.98,
        "low": 39.94,
        "volume": 1187
    },
    {
        "date": "2019-10-30T12:20:00.000Z",
        "open": 39.98,
        "close": 39.98,
        "high": 39.98,
        "low": 39.98,
        "volume": 201
    },
    {
        "date": "2019-10-30T12:25:00.000Z",
        "open": 39.97,
        "close": 39.95,
        "high": 39.97,
        "low": 39.95,
        "volume": 551
    },
    {
        "date": "2019-10-30T12:30:00.000Z",
        "open": 39.93,
        "close": 39.91,
        "high": 39.94,
        "low": 39.91,
        "volume": 1129
    },
    {
        "date": "2019-10-30T12:35:00.000Z",
        "open": 39.91,
        "close": 39.9,
        "high": 39.95,
        "low": 39.89,
        "volume": 2813
    },
    {
        "date": "2019-10-30T12:40:00.000Z",
        "open": 39.93,
        "close": 39.93,
        "high": 39.93,
        "low": 39.93,
        "volume": 634
    },
    {
        "date": "2019-10-30T12:45:00.000Z",
        "open": 39.97,
        "close": 39.97,
        "high": 39.97,
        "low": 39.97,
        "volume": 121
    },
    {
        "date": "2019-10-30T12:50:00.000Z",
        "open": 40,
        "close": 40.18,
        "high": 40.18,
        "low": 39.98,
        "volume": 23089
    },
    {
        "date": "2019-10-30T12:55:00.000Z",
        "open": 40.18,
        "close": 40.18,
        "high": 40.21,
        "low": 40.18,
        "volume": 1114
    },
    {
        "date": "2019-10-30T13:00:00.000Z",
        "open": 40.19,
        "close": 40.19,
        "high": 40.21,
        "low": 40.19,
        "volume": 1858
    },
    {
        "date": "2019-10-30T13:05:00.000Z",
        "open": 40.17,
        "close": 40.19,
        "high": 40.19,
        "low": 40.17,
        "volume": 1144
    },
    {
        "date": "2019-10-30T13:10:00.000Z",
        "open": 40.2,
        "close": 40.19,
        "high": 40.2,
        "low": 40.19,
        "volume": 658
    },
    {
        "date": "2019-10-30T13:15:00.000Z",
        "open": 40.21,
        "close": 40.24,
        "high": 40.24,
        "low": 40.21,
        "volume": 3426
    },
    {
        "date": "2019-10-30T13:20:00.000Z",
        "open": 40.27,
        "close": 40.35,
        "high": 40.35,
        "low": 40.27,
        "volume": 2980
    },
    {
        "date": "2019-10-30T13:25:00.000Z",
        "open": 40.33,
        "close": 40.28,
        "high": 40.33,
        "low": 40.28,
        "volume": 1771
    },
    {
        "date": "2019-10-30T13:30:00.000Z",
        "open": 40.31,
        "close": 40.3,
        "high": 40.33,
        "low": 40.29,
        "volume": 2430
    },
    {
        "date": "2019-10-30T13:35:00.000Z",
        "open": 40.29,
        "close": 40.27,
        "high": 40.29,
        "low": 40.27,
        "volume": 2156
    },
    {
        "date": "2019-10-30T13:40:00.000Z",
        "open": 40.28,
        "close": 40.33,
        "high": 40.33,
        "low": 40.28,
        "volume": 4132
    },
    {
        "date": "2019-10-30T13:45:00.000Z",
        "open": 40.32,
        "close": 40.3,
        "high": 40.32,
        "low": 40.29,
        "volume": 3722
    },
    {
        "date": "2019-10-30T13:50:00.000Z",
        "open": 40.3,
        "close": 40.33,
        "high": 40.34,
        "low": 40.3,
        "volume": 6959
    },
    {
        "date": "2019-10-30T13:55:00.000Z",
        "open": 40.31,
        "close": 40.29,
        "high": 40.32,
        "low": 40.27,
        "volume": 11919
    },
    {
        "date": "2019-10-30T14:00:00.000Z",
        "open": 40.31,
        "close": 40.29,
        "high": 40.32,
        "low": 40.27,
        "volume": 11919
    }
].map(item => ({ ...item, date: new Date(item.date) }))
// tslint: enable

export type Interval = { unit: BaseUnit, step: number };

const intervalUnitsMap = {
    minutes: 1,
    hours: 60,
    days: 1440,
    weeks: 10080
};

@Component({
    selector: 'app-stock-details',
    templateUrl: './stock-details.component.html',
    styleUrls: ['./stock-details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StockDetailsComponent implements OnInit {

    @Input() public chartType: 'candle' | 'line' | 'area' = 'candle';

    @Input() public interval: Interval = { unit: 'hours', step: 1 };
    @Input() public range: SelectionRange = { start: null, end: null };
    @Input() public symbol: string;

    public stockData: StockIntervalDetails[] = data;
    public volumeValueAxisMax: number;
    public categoryPlotBands: PlotBand[];

    constructor(private stockDataService: StockDataService) { }

    public ngOnInit(): void {
        // setting the valueAxis height of the column chart to three times the height of the largest `volume` value
        // (contains the column series in just one third of the chart area)
        this.volumeValueAxisMax = Math.max(...this.stockData.map(stock => stock.volume)) * 3;

        this.categoryPlotBands = this.stockData.reduce((bands, current, index, allStocks) => {
            bands.push(<PlotBand>{
                from: current.date,
                to: (allStocks[index + 1] || current).date,
                color: index % 2 !== 0 ? 'white' : 'lightgrey',
                // keep the opacity low to avoid hiding the majorGridLines of the value axis
                opacity: 0.2
            });

            return bands;
        }, <PlotBand[]>[]);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.interval || changes.range || changes.symbol) {
            const intervalInMinutes = this.interval.step * intervalUnitsMap[this.interval.unit];
            // this.stockData = this.stockDataService.getStockIntervalDetails(this.symbol, this.range, intervalInMinutes);
        }
    }

    public itemColor = (args: any) => {
        if (args.index === 0) {
            return '#5CB85C';
        }

        const data = args.series.data;
        const current: StockIntervalDetails = data[args.index];
        const previous: StockIntervalDetails = data[args.index - 1];

        return current.volume >= previous.volume ? '#5CB85C' : '#FF6358';
    }

    public candleChartAggregate = {
        open: (value: number[]) => value[0],
        close: (value: number[]) => value[value.length - 1],
        high: (value: number[]) => Math.max(...value),
        low: (value: number[]) => Math.min(...value),
        volume: (value: number[]) => value.reduce((total, current) => total + current, 0)
    };
}
