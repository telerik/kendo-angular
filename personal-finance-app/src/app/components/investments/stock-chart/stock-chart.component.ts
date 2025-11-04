import { Component } from '@angular/core';
import { KENDO_CHARTS, NavigatorFilterEvent } from '@progress/kendo-angular-charts';
import { IntlService, NumberFormatOptions } from '@progress/kendo-angular-intl';
import { MessageService } from '@progress/kendo-angular-l10n';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { tabStripItems } from '../../../data/tabstrip-items';
import { TabStripItem } from '../../../models/tabstrip-item';
import { CustomMessagesService } from '../../../services/custom-messages.service';

@Component({
    selector: 'app-stock-chart',
    standalone: true,
    imports: [KENDO_LAYOUT, KENDO_CHARTS],
    templateUrl: './stock-chart.component.html',
})
export class StockChartComponent {
    public selected = 0;
    public tabStripItems: TabStripItem[] = tabStripItems;
    public customMsgService: CustomMessagesService;
    public from: Date = new Date('2019/03/05');
    public to: Date = new Date('2020/02/07');

    public customCurrencyOptions: NumberFormatOptions = {
        style: 'accounting',
        currencyDisplay: 'symbol',
        currency: 'USD',
        minimumFractionDigits: 0,
    };

    constructor(public intl: IntlService, private messages: MessageService) {
        this.customMsgService = this.messages as CustomMessagesService;
    }

    public navigatorFilter(e: NavigatorFilterEvent): void {
        this.from = e.from;
        this.to = e.to;
    }
}
