import { Component, Input } from '@angular/core';
import { Stock, ChartConfig } from '../../../model';
import { series, seriesTypes } from '../../../data';
import { getTitle, getChartType } from '../../../utils';
import { saveAs } from '@progress/kendo-file-saver';
import { ChartComponent, SeriesType } from '@progress/kendo-angular-charts';

@Component({
    selector: 'scatter-bubble-charts',
    templateUrl: './scatter-bubble.template.html'
})
export class ScatterBubbleChartComponent {
    @Input() public chartConfiguration: ChartConfig = { seriesType: 'pie', stack: false };
    @Input() public set data(value: Stock[]) {
        this.stockData = value.map((item, index) => {
            item.index = index;
            return item;
        });
    }

    public stockData: Stock[] = [];
    public series: object[] = series;
    public selectedSeries: string[] = ['price', 'pe'];
    public seriesTypes: string[] = seriesTypes.complexSeries;
    public getTitle = getTitle;
    public expanded = false;

    constructor() {
        this.labelContent = this.labelContent.bind(this);
    }

    public labelContent(args: any): string {
        if (args.value >= 0) {
            return this.stockData[args.value].symbol;
        } else {
            return '';
        }
    }

    public onValueChange(chartName: string) {
        this.chartConfiguration.seriesType = getChartType(chartName) as SeriesType;
    }

    public exportChart(chart: ChartComponent): void {
        chart.exportImage().then((data) => {
            saveAs(data, 'chart.png');
        });
    }
}
