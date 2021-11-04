import { Component, Input } from '@angular/core';
import { Stock, ChartConfig } from '../../../model';

@Component({
    selector: 'window-component',
    templateUrl: './window.component.html'
})
export class WindowComponent {
    @Input() public data: Stock[] = [];
    @Input() public chartConfiguration: ChartConfig = { seriesType: 'line', stack: false };
    ;

    public isBubbleOrSeriesChart(): boolean {
        return this.chartConfiguration.seriesType === 'scatter' || this.chartConfiguration.seriesType === 'bubble';
    }

    public isCircularChart(): boolean {
        return this.chartConfiguration.seriesType === 'pie' || this.chartConfiguration.seriesType === 'donut';
    }

    public isSimpleChart(): boolean {
        return this.chartConfiguration.seriesType !== 'pie' && this.chartConfiguration.seriesType !== 'donut' &&
        this.chartConfiguration.seriesType !== 'scatter' && this.chartConfiguration.seriesType !== 'bubble';
    }
}
