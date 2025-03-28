import { Component } from '@angular/core';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { TabStripItem } from '../../../models/tabstrip-item';
import { tabStripItems } from '../../../data/tabstrip-items';
import {
  KENDO_CHARTS,
  NavigatorFilterEvent,
  SelectEndEvent,
} from '@progress/kendo-angular-charts';
import { IntlService, NumberFormatOptions } from '@progress/kendo-angular-intl';
import { CustomMessagesService } from '../../../services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';

@Component({
  selector: 'app-stock-chart',
  standalone: true,
  imports: [KENDO_LAYOUT, KENDO_CHARTS],
  templateUrl: './stock-chart.component.html',
  styleUrl: './stock-chart.component.css',
})
export class StockChartComponent {
  public selected = 0;
  public tabStripItems: TabStripItem[] = tabStripItems;

  public customMsgService: CustomMessagesService;

  constructor(public intl: IntlService, private messages: MessageService) {
    this.customMsgService = this.messages as CustomMessagesService;
  }

  public from: Date = new Date('2019/03/05');
  public to: Date = new Date('2020/02/07');

  public customCurrencyOptions: NumberFormatOptions = {
    style: 'accounting',
    currencyDisplay: 'symbol',
    currency: 'USD',
    minimumFractionDigits: 0,
  };

  public navigatorFilter(e: NavigatorFilterEvent): void {
    this.from = e.from;
    this.to = e.to;
  }
}
