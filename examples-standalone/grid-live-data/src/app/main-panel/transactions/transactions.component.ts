import { Component } from '@angular/core';
import { Transactions } from '../../models/transaction.model';
import { accountTransactions } from '../transaction-data/transactions';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';


@Component({
  selector: 'transactions',
  imports: [KENDO_LAYOUT],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
    public transactionCards: Transactions[] = accountTransactions;

    public getCardImg(card: Transactions): string {
        return `assets/coinslogo/${card.currency}.png`;
    }
}
