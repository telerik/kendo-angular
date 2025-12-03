import { Component, Input } from '@angular/core';
import { ChartComponent, KENDO_CHARTS, SeriesType } from '@progress/kendo-angular-charts';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { SelectChartTypeComponent } from '../../common/select-chart-type/select-chart-type.component';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { ChartConfig, Stock } from '../../../model';
import { SVGIcon, downloadIcon, gearIcon } from '@progress/kendo-svg-icons';
import { series, seriesTypes } from '../../../data';
import { getChartType, getTitle } from '../../../utils';
import { saveAs } from '@progress/kendo-file-saver';
import { KENDO_TOOLTIP } from '@progress/kendo-angular-tooltip';

@Component({
    selector: 'pie-donut-stocks',
    imports: [KENDO_LAYOUT, KENDO_DROPDOWNS, KENDO_CHARTS, SelectChartTypeComponent, KENDO_BUTTONS, KENDO_TOOLTIP],
    templateUrl: './pie-donut.component.html'
})
export class PieDonutComponent {
    @Input() public data: Stock[] = [];
    @Input() public chartConfiguration: ChartConfig = { seriesType: 'pie', stack: false };
    public expanded = false;

    public iconDownload: SVGIcon = downloadIcon;
    public iconGear: SVGIcon = gearIcon;

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
