import { Component, HostListener } from '@angular/core';
import {
  KENDO_CHARTS,
  LegendItemVisualArgs,
  SeriesLabelsContentArgs,
} from '@progress/kendo-angular-charts';
import {
  Element,
  Group,
  Path,
  Rect as RectShape,
  geometry,
  Text,
} from '@progress/kendo-drawing';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { PieData } from '../../models/charts-models';
import { pieData } from '../../data/charts-data';
import { CurrencyMoverComponent } from './currency-mover/currency-mover.component';
import { CurrencyMover } from '../../models/currency-mover';
import { currencyMovers } from '../../data/currency-movers';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';

const { Point, Rect, Size } = geometry;

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [KENDO_CHARTS, StockChartComponent, CurrencyMoverComponent],
  templateUrl: './investments.component.html',
})
export class InvestmentsComponent {
  public pieData: PieData[] = pieData;
  public currencyMovers: CurrencyMover[] = currencyMovers;
  public legendPosition: 'top' | 'bottom' | 'left' | 'right' | 'custom' =
    'right';

  public customMsgService: CustomMessagesService;

  constructor(private messages: MessageService) {
    this.customMsgService = this.messages as CustomMessagesService;
  }

  public labelContent(args: SeriesLabelsContentArgs): string {
    return `${args.dataItem.value}`;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateLegendPosition(event.target.innerWidth);
  }

  private updateLegendPosition(width: number): void {
    this.legendPosition = width < 768 ? 'bottom' : 'right';
  }
}
