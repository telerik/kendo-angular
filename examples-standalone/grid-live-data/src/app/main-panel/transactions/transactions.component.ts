import { Component } from '@angular/core';
import { Transactions } from 'src/app/models/transaction.model';
import { accountTransactions } from '../transaction-data/transactions';

@Component({
    selector: 'transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
    public transactionCards: Transactions[] = accountTransactions;

    public getCardImg(card: Transactions): string {
        return `assets/coinslogo/${card.currency}.png`;
    }
}
