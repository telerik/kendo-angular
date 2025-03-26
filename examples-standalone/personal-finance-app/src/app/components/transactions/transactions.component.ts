import { Component } from '@angular/core';
import { TransactionsGridComponent } from '../transactions-grid/transactions-grid.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { Transaction } from '../../models/transaction';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TransactionsGridComponent, TransactionDetailComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  public selectedTransaction: Transaction = new Transaction();

  public customMsgService: CustomMessagesService;

  constructor(private messages: MessageService) {
    this.customMsgService = this.messages as CustomMessagesService;
  }

  public onRowSelectionChange(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }
}
