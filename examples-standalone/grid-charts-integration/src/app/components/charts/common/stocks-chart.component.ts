import { Component, Input } from '@angular/core';
import { series, seriesTypes } from '../../../data';
import { Stock, ChartConfig } from '../../../model';
import { getChartStack, getTitle, getChartType } from '../../../utils';
import { saveAs } from '@progress/kendo-file-saver';

@Component({
    selector: 'stocks',
    templateUrl: './stocks-chart.template.html'
})
export class StocksChartComponent {
    @Input() public data: Stock[];
    @Input() public chartConfiguration: ChartConfig;

    public series: Object[] = series;
    public selectedSeries: string[] = ['price', 'pe'];
    public seriesTypes: string[] = seriesTypes.simpleSeries;
    public getTitle = getTitle;
    public expanded: boolean = false;

    public onValueChange(chartName: string) {
        this.chartConfiguration.stack = getChartStack(chartName);
        this.chartConfiguration.seriesType = getChartType(chartName);
    }

    public exportChart(chart): void {
        chart.exportImage().then((dataURI) => {
            saveAs(dataURI, 'chart.png');
        });
    }
}
