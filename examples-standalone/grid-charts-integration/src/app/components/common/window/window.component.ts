import { Component, Input } from '@angular/core';
import { Stock, ChartConfig } from '../../../model';

@Component({
    selector: 'window',
	templateUrl: './window.component.html'
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
