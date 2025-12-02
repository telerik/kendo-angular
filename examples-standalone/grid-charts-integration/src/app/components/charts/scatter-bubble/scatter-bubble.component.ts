import { Component, Input } from '@angular/core';
import { ChartConfig, Stock } from '../../../model';
import { series, seriesTypes } from '../../../data';
import { getChartType, getTitle } from '../../../utils';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { ChartComponent, KENDO_CHARTS, SeriesType } from '@progress/kendo-angular-charts';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { saveAs } from '@progress/kendo-file-saver';
import { SVGIcon, gearIcon, downloadIcon } from '@progress/kendo-svg-icons';
import { SelectChartTypeComponent } from '../../common/select-chart-type/select-chart-type.component';
import { SelectSeriesComponent } from '../../common/select-series/select-series.component';
import { KENDO_TOOLTIP } from '@progress/kendo-angular-tooltip';


@Component({
    selector: 'scatter-bubble-charts',
    imports: [KENDO_LAYOUT, KENDO_CHARTS, KENDO_BUTTONS, SelectChartTypeComponent, SelectSeriesComponent, KENDO_TOOLTIP],
    templateUrl: './scatter-bubble.component.html'
})
export class ScatterBubbleComponent {
    @Input() public chartConfiguration: ChartConfig = { seriesType: 'pie', stack: false };
    @Input() public set data(value: Stock[]) {
        this.stockData = value.map((item, index) => {
            item.index = index;
            return item;
        });
    }

    public iconDownload: SVGIcon = downloadIcon;
    public iconGear: SVGIcon = gearIcon;

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
