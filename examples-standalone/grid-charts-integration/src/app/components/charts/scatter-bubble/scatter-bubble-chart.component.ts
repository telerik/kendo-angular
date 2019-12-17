import { Component, Input } from '@angular/core';
import { Stock, ChartConfig } from '../../../model';
import { series, seriesTypes } from '../../../data';
import { getTitle, getChartType } from '../../../utils';
import { saveAs } from '@progress/kendo-file-saver';

@Component({
    selector: 'scatter-bubble-charts',
    templateUrl: './scatter-bubble.template.html'
})
export class ScatterBubbleChartComponent {
    @Input() public chartConfiguration: ChartConfig;
    @Input() public set data(value: Stock[]) {
        this.stockData = value.map((item, index) => {
            item.index = index;
            return item;
        });
    }

    public stockData: Stock[] = [];
    public series: Object[] = series;
    public selectedSeries: string[] = ['price', 'pe'];
    public seriesTypes: string[] = seriesTypes.complexSeries;
    public getTitle = getTitle;

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

    public onValueChange(chartName) {
        this.chartConfiguration.seriesType = getChartType(chartName);
    }

    public exportChart(chart): void {
        chart.exportImage().then((dataURI) => {
            saveAs(dataURI, 'chart.png');
        });
    }
}
