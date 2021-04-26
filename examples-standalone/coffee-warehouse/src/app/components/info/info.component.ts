import { Component } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from 'src/app/services/custom-messages.service';

@Component({
    selector: 'info-component',
    templateUrl: './info.component.html',
})
export class InfoComponent {
    public customMsgService: CustomMessagesService;

    constructor(public msgService: MessageService) {
        this.customMsgService = <CustomMessagesService>this.msgService;
    }
}
