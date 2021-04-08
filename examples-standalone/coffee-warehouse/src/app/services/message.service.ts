import { MessageService } from '@progress/kendo-angular-l10n';

const data = {
    he: {
        messages: {
            Dashboard: 'Test HE'
        }
    },
    es: {
        messages: {
            Dashboard: 'Test Spanish'
        }
    }
};

export class CustomMessageService extends MessageService {
	private localeId = 'es';

    public set language(value: string) {
        const lang = data[value];
        if (lang) {
            this.localeId = value;
            this.notify(lang.rtl);
        }
    }

    public get language(): string {
        return this.localeId;
    }

	private get messages(): any {
        const lang = data[this.localeId];

        if (lang) {
            console.log(lang);
            return lang.messages;
        }
    }

    public get(key: string): string {
        return this.messages[key];
    }

    public translate(msg: string): string {
        return this.messages[msg];
    }
}
