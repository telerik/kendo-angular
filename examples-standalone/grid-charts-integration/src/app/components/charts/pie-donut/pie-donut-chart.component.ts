import { Component, Input } from '@angular/core';
import { Stock, ChartConfig } from '../../../model';
import { series, seriesTypes } from '../../../data';
import { getTitle, getChartType } from '../../../utils';
import { saveAs } from '@progress/kendo-file-saver';
import { ChartComponent, Series, SeriesType } from '@progress/kendo-angular-charts';

@Component({
    selector: 'pie-donut-stocks',
    templateUrl: './pie-donut-chart.template.html'
})
export class PieDonutStockComponent {
    @Input() public data: Stock[] = [];
    @Input() public chartConfiguration: ChartConfig = { seriesType: 'pie', stack: false };
    public expanded = false;

    public selectedSeries = 'price';
    public series: object[] = series;
    public seriesTypes: string[] = seriesTypes.circularSeries;
    public getTitle = getTitle;

    public onValueChange(chartName: string) {
        this.chartConfiguration.seriesType = getChartType(chartName) as SeriesType;
    }

    public exportChart(chart: ChartComponent): void {
        chart.exportImage().then((data) => {
            saveAs(data, 'chart.png');
        });
    }
}
