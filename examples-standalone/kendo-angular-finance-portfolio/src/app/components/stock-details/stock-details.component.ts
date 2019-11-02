import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PlotBand } from '@progress/kendo-angular-charts';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';
import { StockDataService } from 'src/app/services/stock-data.service';

import { StockIntervalDetails, Interval, IntervalUnitsMap } from 'src/app/models';

@Component({
    selector: 'app-stock-details',
    templateUrl: './stock-details.component.html',
    styleUrls: ['./stock-details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StockDetailsComponent implements OnInit, OnChanges {

    @Input() public chartType: 'candle' | 'line' | 'area' = 'candle';

    @Input() public interval: Interval = { unit: 'hours', step: 1 };
    @Input() public range: SelectionRange = { start: null, end: null };
    @Input() public symbol: string;

    public stockData: StockIntervalDetails[];
    public volumeValueAxisMax: number;
    public categoryPlotBands: PlotBand[];

    public candleChartAggregate = {
        open: (value: number[]) => value[0],
        close: (value: number[]) => value[value.length - 1],
        high: (value: number[]) => Math.max(...value),
        low: (value: number[]) => Math.min(...value),
        volume: (value: number[]) => value.reduce((total, current) => total + current, 0)
    };

    constructor(private stockDataService: StockDataService) { }

    public ngOnInit(): void {
        // setting the valueAxis height of the column chart to three times the height of the largest `volume` value
        // (contains the column series in just one third of the chart area)
        this.volumeValueAxisMax = Math.max(...this.stockData.map(stock => stock.volume)) * 3;

        this.categoryPlotBands = this.stockData.reduce((bands, current, index, allStocks) => {
            bands.push({
                from: current.date,
                to: (allStocks[index + 1] || current).date,
                color: index % 2 !== 0 ? 'white' : 'lightgrey',
                // keep the opacity low to avoid hiding the majorGridLines of the value axis
                opacity: 0.2
            } as PlotBand);

            return bands;
        }, [] as PlotBand[]);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.interval || changes.range || changes.symbol) {
            const intervalInMinutes = this.interval.step * IntervalUnitsMap[this.interval.unit];
            this.stockData = this.stockDataService.getStockIntervalDetails(this.symbol, this.range, intervalInMinutes);
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
}
