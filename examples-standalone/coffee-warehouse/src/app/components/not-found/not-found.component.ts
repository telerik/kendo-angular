import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from '../../services/custom-messages.service';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    imports: [RouterLink, KENDO_BUTTONS]
})
export class NotFoundComponent {
    public customMsgService: CustomMessagesService;

    constructor(messageService: MessageService) {
        this.customMsgService = messageService as CustomMessagesService;
    }
}
