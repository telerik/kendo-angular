import { Component, Input } from "@angular/core";
import { Stock, ChartConfig } from "../model";
import { series, seriesTypes } from "../data";
import { getTitle, getChartType } from "../utils";

@Component({
    selector: "scatter-bubble-charts",
    template: `
    <kendo-chart>
      <kendo-chart-title text="Details per Stock"></kendo-chart-title>
      <kendo-chart-x-axis>
        <kendo-chart-x-axis-item
          [max]="stockData.length - 1"
          [majorUnit]="1"
          [labels]="{ content: labelContent, rotation: 'auto' }"
        >
        </kendo-chart-x-axis-item>
      </kendo-chart-x-axis>
      <kendo-chart-series>
        <kendo-chart-series-item
          *ngFor="let serie of selectedSeries"
          [data]="stockData"
          [type]="chartConfiguration.seriesType"
          [xField]="'index'"
          [yField]="serie"
          [name]="getTitle(serie)"
          [sizeField]="serie"
          [negativeValues]="{ visible: true }"
        >
          <kendo-chart-series-item-tooltip>
            <ng-template let-dataItem="dataItem" let-value="value">
              {{ dataItem.symbol + " " + getTitle(serie) + ": " + dataItem[serie] }}
            </ng-template>
          </kendo-chart-series-item-tooltip>
        </kendo-chart-series-item>
      </kendo-chart-series>
      <kendo-chart-legend position="right" orientation="vertical">
      </kendo-chart-legend>
    </kendo-chart>

    <select-series [data]="series" (valueChange)="selectedSeries = $event;"></select-series>

    <select-chart-type
      [data]="seriesTypes"
      [chartName]="chartConfiguration.chartName"
      (valueChange)="onValueChange($event)"
    ></select-chart-type>
  `
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
    public selectedSeries: string[] = ["price", "pe"];
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
}
