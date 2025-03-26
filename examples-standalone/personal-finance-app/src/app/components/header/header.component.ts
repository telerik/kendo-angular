import { Component, Inject, LOCALE_ID, ViewEncapsulation } from '@angular/core';
import { KENDO_ICONS, SVGIcon } from '@progress/kendo-angular-icons';

import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { caretAltDownIcon, searchIcon } from '@progress/kendo-svg-icons';
import { MessageService } from '@progress/kendo-angular-l10n';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';
import { CustomMessagesService } from '../../services/custom-messages.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    KENDO_INPUTS,
    KENDO_LAYOUT,
    KENDO_ICONS,
    KENDO_BUTTONS,
    KENDO_DROPDOWNS,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public searchIcon: SVGIcon = searchIcon;
  public dropDownIcon: SVGIcon = caretAltDownIcon;

  public selectedLanguage = { locale: 'English', localeId: 'en-US' };
  public customMsgService: CustomMessagesService;

  constructor(
    public messages: MessageService,
    @Inject(LOCALE_ID) public localeId: string,
    public intlService: IntlService
  ) {
    this.localeId = this.selectedLanguage.localeId;
    this.setLocale(this.localeId);

    this.customMsgService = this.messages as CustomMessagesService;
    this.customMsgService.language = this.selectedLanguage.localeId;
  }

  public translations: Array<{ locale: string; localeId: string }> = [
    { locale: 'English', localeId: 'en-US' },
    { locale: 'Español', localeId: 'es-ES' },
    { locale: 'Deutsch', localeId: 'de-DE' },
    { locale: 'Français', localeId: 'fr-FR' },
  ];

  public changeLanguage(item: any): void {
    this.selectedLanguage = item;
    this.customMsgService.language = item.localeId;
    this.setLocale(item.localeId);
  }

  private setLocale(locale: any): void {
    (this.intlService as CldrIntlService).localeId = locale;
  }
}
