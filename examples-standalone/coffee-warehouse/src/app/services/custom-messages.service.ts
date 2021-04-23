import { EventEmitter, Injectable, Output } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';

import { enComponentMessages, enCustomMessages } from '../messages/en-US';
import { esComponentMessages, esCustomMessages } from '../messages/es';
import { frComponentMessages, frCustomMessages } from '../messages/fr';

const componentMsgs = {
    ['en-US']: enComponentMessages,
    ['es']: esComponentMessages,
    ['fr']: frComponentMessages
};

const customMsgs = {
    ['en-US']: enCustomMessages,
    ['es']: esCustomMessages,
    ['fr']: frCustomMessages
};

@Injectable() export class CustomMessagesService extends MessageService {
    @Output() public localeChange = new EventEmitter();
    private localeId;

    public set language(value: string) {
        const locale = componentMsgs[value];
        if (locale) {
            this.localeId = value;
            this.localeChange.emit()
            this.notify();
        }
    }

    public get language(): string {
        return this.localeId;
    }

    private get messages(): any {
        const messages = componentMsgs[this.localeId];
        if (messages) {
            return messages;
        }
    }

    public get(key: string): string {
        return this.messages[key];
    }

    // Translate custom messages
    public translate(word: string): string {
        const messages = customMsgs[this.localeId];
        return messages[word];
    }
}
