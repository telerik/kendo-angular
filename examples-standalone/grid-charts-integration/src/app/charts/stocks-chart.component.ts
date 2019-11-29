import { Component, Input } from "@angular/core";
import { series, seriesTypes } from "../data";
import { Stock, ChartConfig } from "../model";
import { getChartStack, getTitle, getChartType } from "../utils";

@Component({
    selector: "stocks",
    template: `
    <kendo-chart>
      <kendo-chart-title text="Details per Stock"></kendo-chart-title>
      <kendo-chart-series>
        <kendo-chart-series-item
          *ngFor="let serie of selectedSeries"
          [type]="chartConfiguration.seriesType"
          [stack]="chartConfiguration.stack"
          [gap]="2"
          [spacing]="0.25"
          [data]="data"
          [field]="serie"
          [name]="getTitle(serie)"
          [categoryField]="'symbol'"
        >
          <kendo-chart-series-item-tooltip>
            <ng-template let-value="value">
              {{ getTitle(serie) + ": " + value }}
            </ng-template>
          </kendo-chart-series-item-tooltip>
        </kendo-chart-series-item>
      </kendo-chart-series>

      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item [labels]="{ rotation: 'auto' }">
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>

      <kendo-chart-value-axis>
        <kendo-chart-value-axis-item [labels]="{ rotation: 'auto' }">
        </kendo-chart-value-axis-item>
      </kendo-chart-value-axis>
      <kendo-chart-legend position="right" orientation="vertical">
      </kendo-chart-legend>
    </kendo-chart>

    <select-series
      [data]="series"
      (valueChange)="selectedSeries = $event"
    ></select-series>

    <select-chart-type
      [data]="seriesTypes"
      [chartName]="chartConfiguration.chartName"
      (valueChange)="onValueChange($event)"
    ></select-chart-type>
  `
})
export class StocksChartComponent {
    @Input() public data: Stock[];
    @Input() public chartConfiguration: ChartConfig;

    public series: Object[] = series;
    public selectedSeries: string[] = ["price", "pe"];
    public seriesTypes: string[] = seriesTypes.simpleSeries;
    public getTitle = getTitle;

    public onValueChange(chartName: string) {
        this.chartConfiguration.stack = getChartStack(chartName);
        this.chartConfiguration.seriesType = getChartType(chartName);
    }
}
