import { Component, Input } from '@angular/core';
import { ChartConfig, Stock } from '../../../model';
import { series, seriesTypes } from '../../../data';
import { getChartStack, getChartType, getTitle } from '../../../utils';
import { ChartComponent, ChartsModule, SeriesType } from '@progress/kendo-angular-charts';
import { saveAs } from '@progress/kendo-file-saver';
import { SVGIcon, gearIcon, downloadIcon } from '@progress/kendo-svg-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SelectSeriesComponent } from '../../common/select-series/select-series.component';
import { SelectChartTypeComponent } from '../../common/select-chart-type/select-chart-type.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';


@Component({
    selector: 'stocks-component',
    imports: [LayoutModule, ChartsModule, SelectSeriesComponent, SelectChartTypeComponent, ButtonsModule, TooltipsModule],
    templateUrl: './stocks-chart.component.html'
})
export class StocksChartComponent {
    @Input() public data: Stock[] = [];
    @Input() public chartConfiguration: ChartConfig = { seriesType: 'line', stack: false };

    public iconDownload: SVGIcon = downloadIcon;
    public iconGear: SVGIcon = gearIcon;

    public series: object[] = series;
    public selectedSeries: string[] = ['price', 'pe'];
    public seriesTypes: string[] = seriesTypes.simpleSeries;
    public getTitle = getTitle;
    public expanded = false;

    public onValueChange(chartName: string) {
        this.chartConfiguration.stack = getChartStack(chartName);
        this.chartConfiguration.seriesType = getChartType(chartName) as SeriesType;
    }

    public exportChart(chart: ChartComponent): void {
        chart.exportImage().then((data) => {
            saveAs(data, 'chart.png');
        });
    }
}
