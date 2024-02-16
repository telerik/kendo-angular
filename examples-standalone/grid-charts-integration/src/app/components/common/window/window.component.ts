import { Component, Input } from '@angular/core';
import { ChartConfig, Stock } from '../../../model';
import { ScatterBubbleComponent } from '../../charts/scatter-bubble/scatter-bubble.component';
import { PieDonutComponent } from '../../charts/pie-donut/pie-donut.component';
import { StocksChartComponent } from '../../charts/common/stocks-chart.component';

import 'hammerjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'window-component',
  standalone: true,
  imports: [ScatterBubbleComponent, PieDonutComponent, StocksChartComponent, CommonModule],
  templateUrl: './window.component.html',
})
export class WindowComponent {
  @Input() public data: Stock[] = [];
  @Input() public chartConfiguration: ChartConfig = {
    seriesType: 'line',
    stack: false,
  };
  public isBubbleOrSeriesChart(): boolean {
    return (
      this.chartConfiguration.seriesType === 'scatter' ||
      this.chartConfiguration.seriesType === 'bubble'
    );
  }

  public isCircularChart(): boolean {
    return (
      this.chartConfiguration.seriesType === 'pie' ||
      this.chartConfiguration.seriesType === 'donut'
    );
  }

  public isSimpleChart(): boolean {
    return (
      this.chartConfiguration.seriesType !== 'pie' &&
      this.chartConfiguration.seriesType !== 'donut' &&
      this.chartConfiguration.seriesType !== 'scatter' &&
      this.chartConfiguration.seriesType !== 'bubble'
    );
  }
}
