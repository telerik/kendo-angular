import { Component, ViewEncapsulation } from '@angular/core';
import { NewsComponent } from './news/news.component';
import { BalanceComponent } from './balance/balance.component';
import { TransactionsComponent } from './transactions/transactions.component';

@Component({
    selector: 'main-panel',
    templateUrl: './main-panel.component.html',
    styleUrls: ['./main-panel.component.css'],
    imports: [BalanceComponent, NewsComponent, TransactionsComponent],
    standalone: true,
    encapsulation: ViewEncapsulation.None
})
export class MainPanelComponent {}