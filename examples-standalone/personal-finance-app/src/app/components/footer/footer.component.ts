import { Component } from '@angular/core';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();

  public customMsgService: CustomMessagesService;

  constructor(public msgService: MessageService) {
    this.customMsgService = this.msgService as CustomMessagesService;
  }
}
