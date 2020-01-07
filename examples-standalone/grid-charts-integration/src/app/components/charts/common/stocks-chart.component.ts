import { Component, Input } from '@angular/core';
import { series, seriesTypes } from '../../../data';
import { Stock, ChartConfig } from '../../../model';
import { getChartStack, getTitle, getChartType } from '../../../utils';
import { saveAs } from '@progress/kendo-file-saver';
import { ChartComponent } from '@progress/kendo-angular-charts';

@Component({
    selector: 'stocks-component',
    templateUrl: './stocks-chart.template.html'
})
export class StocksChartComponent {
    @Input() public data: Stock[];
    @Input() public chartConfiguration: ChartConfig;

    public series: object[] = series;
    public selectedSeries: string[] = ['price', 'pe'];
    public seriesTypes: string[] = seriesTypes.simpleSeries;
    public getTitle = getTitle;
    public expanded = false;

    public onValueChange(chartName: string) {
        this.chartConfiguration.stack = getChartStack(chartName);
        this.chartConfiguration.seriesType = getChartType(chartName);
    }

    public exportChart(chart: ChartComponent): void {
        chart.exportImage().then((data) => {
            saveAs(data, 'chart.png');
        });
    }
}
