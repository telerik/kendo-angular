import { EventEmitter, Injectable, Output } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';

import {
  enComponentMessages,
  enCustomMessages,
} from '../../../public/assets/messages/en-US';
import {
  esComponentMessages,
  esCustomMessages,
} from '../../../public/assets/messages/es';

import {
  frComponentMessages,
  frCustomMessages,
} from '../../../public/assets/messages/fr';

import {
  deComponentMessages,
  deCustomMessages,
} from '../../../public/assets/messages/de';

const componentMsgs: any = {
  ['en-US']: enComponentMessages,
  ['es-ES']: esComponentMessages,
  ['fr-FR']: frComponentMessages,
  ['de-DE']: deComponentMessages,
};

const customMsgs: any = {
  ['en-US']: enCustomMessages,
  ['es-ES']: esCustomMessages,
  ['fr-FR']: frCustomMessages,
  ['de-DE']: deCustomMessages,
};

@Injectable()
export class CustomMessagesService extends MessageService {
  @Output() public localeChange = new EventEmitter();
  private localeId: string = 'en-US';

  public set language(value: string) {
    const locale = componentMsgs[value];
    if (locale) {
      this.localeId = value;
      this.localeChange.emit();
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

  public override get(key: string): string {
    return this.messages[key];
  }

  // Translate custom messages
  public translate(word: string): string {
    const messages = customMsgs[this.localeId];
    return messages[word];
  }
}
