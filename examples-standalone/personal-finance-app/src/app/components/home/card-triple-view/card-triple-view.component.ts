import { Component, Input } from '@angular/core';
import { OverviewCard } from '../../../models/overview-card';
import { CommonModule } from '@angular/common';
import {
  IntlModule,
  IntlService,
  NumberFormatOptions,
} from '@progress/kendo-angular-intl';
import { CustomMessagesService } from '../../../services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';

@Component({
  selector: 'app-card-triple-view',
  standalone: true,
  imports: [CommonModule, IntlModule],
  templateUrl: './card-triple-view.component.html',
  styleUrl: './card-triple-view.component.css',
})
export class CardTripleViewComponent {
  @Input() public cardData!: OverviewCard;

  public customMsgService: CustomMessagesService;

  constructor(public intl: IntlService, public msgService: MessageService) {
    this.customMsgService = this.msgService as CustomMessagesService;
  }

  public customCurrencyOptions: NumberFormatOptions = {
    style: 'currency',
    currencyDisplay: 'code',
  };
}
