import { Component, Input } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { ChipThemeColor, KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { CustomMessagesService } from '../../../services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';

@Component({
    selector: 'app-transaction-detail',
    imports: [KENDO_INPUTS, KENDO_LABELS, KENDO_BUTTONS, KENDO_DATEINPUTS],
    templateUrl: './transaction-detail.component.html',
    styleUrl: './transaction-detail.component.css',
})
export class TransactionDetailComponent {
    @Input() public transaction: Transaction = new Transaction();

    public customMsgService: CustomMessagesService;

    constructor(private messages: MessageService) {
        this.customMsgService = this.messages as CustomMessagesService;
    }

    public getThemeColor(): ChipThemeColor {
        switch (this.transaction?.orderStatus) {
            case 'Pending':
                return 'warning';
            case 'Postponed':
                return 'error';
            case 'Published':
                return 'success';
            default:
                return 'info';
        }
    }

    public getTransactionTime(): Date | null {
        const dateOfPurchase = this.transaction?.dateOfPurchase;
        return dateOfPurchase ? new Date(dateOfPurchase) : null;
    }
}
