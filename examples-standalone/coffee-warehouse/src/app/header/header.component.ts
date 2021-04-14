import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output } from '@angular/core';
import { CldrIntlService, IntlService } from '@progress/kendo-angular-intl';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from '../services/custom-messages.service';
import { locales } from 'src/app/data/locales';

@Component({
    selector: 'header-component',
    templateUrl: './header.commponent.html'
})
export class HeaderComponent {
    @Output() public toggle = new EventEmitter();
    @Input() public selectedPage: string;

    public customMsgService: CustomMessagesService;

    public selectedLanguage = { locale: 'English', localeId: 'en-US' };
    public locales = locales;

    constructor(public messages: MessageService, @Inject(LOCALE_ID) public localeId: string, public intlService: IntlService) {
        this.localeId = this.selectedLanguage.localeId;
        this.setLocale(this.localeId);

        this.customMsgService = <CustomMessagesService>this.messages;
        this.customMsgService.language = this.selectedLanguage.localeId;
    }

    public changeLanguage(item): void {
        this.customMsgService.language = item.localeId;
        this.setLocale(item.localeId);
    }

    public setLocale(locale): void {
        (<CldrIntlService>this.intlService).localeId = locale;
    }

    public onButtonClick(): void {
        this.toggle.emit();
    }
}
