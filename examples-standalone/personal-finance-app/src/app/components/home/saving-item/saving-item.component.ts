import { Component, Input } from '@angular/core';
import { KENDO_PROGRESSBARS } from '@progress/kendo-angular-progressbar';
import { Saving } from '../../../models/saving';
import { IntlService, NumberFormatOptions } from '@progress/kendo-angular-intl';
import { CustomMessagesService } from '../../../services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';

@Component({
  selector: 'app-saving-item',
  standalone: true,
  imports: [KENDO_PROGRESSBARS],
  templateUrl: './saving-item.component.html',
})
export class SavingItemComponent {
  @Input() public saving!: Saving;

  public customMsgService: CustomMessagesService;
  public customCurrencyOptions: NumberFormatOptions = {
    style: 'currency',
    currencyDisplay: 'code',
    currency: 'USD',
  };

  constructor(public msgService: MessageService, public intl: IntlService) {
    this.customMsgService = this.msgService as CustomMessagesService;
  }

  public getCurrentTitle() {
    if (this.saving.title === 'Dream Home') {
      return 'dreamHome';
    }
    return this.saving.title.toLowerCase();
  }
}
