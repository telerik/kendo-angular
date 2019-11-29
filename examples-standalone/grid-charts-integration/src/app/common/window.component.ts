import { Component, Input } from "@angular/core";
import { Stock, ChartConfig } from '../model';

@Component({
    selector: "window",
    template: `
      <stocks
        *ngIf="isSimpleChart()"
        [data]="data"
        [chartConfiguration]="chartConfiguration"
      >
      </stocks>

      <pie-donut-stocks
        *ngIf="isCircularChart()"
        [data]="data"
        [chartConfiguration]="chartConfiguration"
      >
      </pie-donut-stocks>

      <scatter-bubble-charts
        *ngIf="isBubbleOrSeriesChart()"
        [data]="data"
        [chartConfiguration]="chartConfiguration"
      >
      </scatter-bubble-charts>
  `
})
export class WindowComponent {
    @Input() public data: Stock[];
    @Input() public chartConfiguration: ChartConfig;

    public isBubbleOrSeriesChart(): boolean {
        if (this.chartConfiguration.seriesType === 'scatter' || this.chartConfiguration.seriesType === 'bubble') {
            return true;
        } else {
            return false;
        }
    }

    public isCircularChart(): boolean {
        if (this.chartConfiguration.seriesType === 'pie' || this.chartConfiguration.seriesType === 'donut') {
            return true;
        } else {
            return false;
        }
    }

    public isSimpleChart(): boolean{
        if (this.chartConfiguration.seriesType !== 'pie' && this.chartConfiguration.seriesType !== 'donut' &&
            this.chartConfiguration.seriesType !== 'scatter' && this.chartConfiguration.seriesType !== 'bubble') {
            return true;
        } else {
            return false;
        }
    }
}
