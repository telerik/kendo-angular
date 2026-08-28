import { Component } from '@angular/core';
import { KENDO_CHARTS } from '@progress/kendo-angular-charts';
import { ColorRange, KENDO_GAUGES } from '@progress/kendo-angular-gauges';
import { IntlService, NumberFormatOptions } from '@progress/kendo-angular-intl';
import { MessageService } from '@progress/kendo-angular-l10n';
import { KENDO_ICONS, SVGIcon } from '@progress/kendo-angular-icons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { walletIcon } from '@progress/kendo-svg-icons';
import { overviewCards } from '../../data/overview-cards';
import { savings } from '../../data/savings';
import { OverviewCard } from '../../models/overview-card';
import { Saving } from '../../models/saving';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { TransactionsGridComponent } from '../transactions-grid/transactions-grid.component';
import { CardTripleViewComponent } from './card-triple-view/card-triple-view.component';
import { SavingItemComponent } from './saving-item/saving-item.component';

@Component({
    selector: 'app-home',
    imports: [CardTripleViewComponent, SavingItemComponent, TransactionsGridComponent, KENDO_CHARTS, KENDO_GAUGES, KENDO_ICONS, KENDO_LAYOUT],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    public overviewCards: OverviewCard[] = overviewCards;
    public savings: Saving[] = savings;
    public walletIcon: SVGIcon = walletIcon;

    public customMsgService: CustomMessagesService;

    constructor(public intl: IntlService, private messages: MessageService) {
        this.customMsgService = this.messages as CustomMessagesService;
    }

    public customCurrencyOptions: NumberFormatOptions = {
        style: 'currency',
        currencyDisplay: 'code',
        currency: 'USD',
    };

    public colors: ColorRange[] = [
        {
            to: 25,
            color: 'var(--kendo-color-info)',
        },
        {
            from: 25,
            to: 50,
            color: 'var(--kendo-color-info)',
        },
        {
            from: 50,
            to: 75,
            color: 'var(--kendo-color-info)',
        },
        {
            from: 75,
            color: 'var(--kendo-color-info)',
        },
    ];
}
