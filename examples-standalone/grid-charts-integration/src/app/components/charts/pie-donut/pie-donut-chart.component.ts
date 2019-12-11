import { Component, Input } from "@angular/core";
import { Stock, ChartConfig } from "../../../model";
import { series, seriesTypes } from "../../../data";
import { getTitle, getChartType } from "../../../utils";
import { saveAs } from '@progress/kendo-file-saver';

@Component({
    selector: "pie-donut-stocks",
    templateUrl: './pie-donut-chart.template.html'
})
export class PieDonutStockComponent {
    @Input() public data: Stock[];
    @Input() public chartConfiguration: ChartConfig;

    public selectedSeries: string = "price";
    public series: Object[] = series;
    public seriesTypes: string[] = seriesTypes.circularSeries;
    public getTitle = getTitle;

    public onValueChange(chartName) {
        this.chartConfiguration.seriesType = getChartType(chartName);
    }

    public exportChart(chart): void {
        chart.exportImage().then((dataURI) => {
            saveAs(dataURI, 'chart.png');
        });
    }
}
