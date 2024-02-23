import { Component } from '@angular/core';
import { Transactions } from '../../models/transaction.model';
import { accountTransactions } from '../transaction-data/transactions';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'transactions',
  standalone: true,
  imports: [LayoutModule, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
    public transactionCards: Transactions[] = accountTransactions;

    public getCardImg(card: Transactions): string {
        return `assets/coinslogo/${card.currency}.png`;
    }
}
