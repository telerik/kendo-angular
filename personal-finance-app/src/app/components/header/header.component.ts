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
import { Router, RouterModule } from '@angular/router';
import {
    searchSuggestionsDe,
    searchSuggestionsEn,
    searchSuggestionsEs,
    searchSuggestionsFr,
} from '../../data/search-suggestions';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [KENDO_INPUTS, KENDO_LAYOUT, KENDO_ICONS, KENDO_BUTTONS, KENDO_DROPDOWNS, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
    public searchIcon: SVGIcon = searchIcon;
    public dropDownIcon: SVGIcon = caretAltDownIcon;
    public suggestions: string[] = searchSuggestionsEn;
    public selectedLanguage = { locale: 'English', localeId: 'en-US' };
    public customMsgService: CustomMessagesService;
    public translations: Array<{ locale: string; localeId: string }> = [
        { locale: 'English', localeId: 'en-US' },
        { locale: 'Español', localeId: 'es-ES' },
        { locale: 'Deutsch', localeId: 'de-DE' },
        { locale: 'Français', localeId: 'fr-FR' },
    ];

    constructor(
        public messages: MessageService,
        @Inject(LOCALE_ID) public localeId: string,
        public intlService: IntlService,
        private router: Router
    ) {
        this.localeId = this.selectedLanguage.localeId;
        this.setLocale(this.localeId);

        this.customMsgService = this.messages as CustomMessagesService;
        this.customMsgService.language = this.selectedLanguage.localeId;

        this.customMsgService.localeChange.subscribe(() => {
            this.suggestions = this.getSearchSuggestions(this.customMsgService.language);
        });
    }

    public changeLanguage(item: { locale: string; localeId: string }): void {
        this.selectedLanguage = item;
        this.customMsgService.language = item.localeId;
        this.setLocale(item.localeId);
    }

    public onValueChange(value: string): void {
        if (!value) return;

        const normalizedValue = this.normalizeText(value);
        const currentLang = this.customMsgService.language;

        const navigationMap = this.getNavigationMap(currentLang);

        for (const [text, route] of Object.entries(navigationMap)) {
            if (this.normalizeText(text) === normalizedValue) {
                this.router.navigate([route]);
                return;
            }
        }
    }

    private setLocale(locale: string): void {
        (this.intlService as CldrIntlService).localeId = locale;
    }

    private getSearchSuggestions(localeId: string): string[] {
        switch (localeId) {
            case 'en-US':
                return searchSuggestionsEn;
            case 'es-ES':
                return searchSuggestionsEs;
            case 'de-DE':
                return searchSuggestionsDe;
            case 'fr-FR':
                return searchSuggestionsFr;
            default:
                return searchSuggestionsEn;
        }
    }

    private normalizeText(text: string): string {
        return text
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    private getNavigationMap(lang: string): { [key: string]: string } {
        switch (lang) {
            case 'en-US':
                return {
                    'Detailed Transactions': '/transactions',
                    'Personal Transactions': '/transactions',
                    'Transactions Overview': '',
                };
            case 'es-ES':
                return {
                    'Transacciones Detalladas': '/transactions',
                    'Transacciones Personales': '/transactions',
                    'Resumen de Transacciones': '',
                };
            case 'de-DE':
                return {
                    'Detaillierte Transaktionen': '/transactions',
                    'Persönliche Transaktionen': '/transactions',
                    Transaktionsübersicht: '',
                };
            case 'fr-FR':
                return {
                    'Transactions Détaillées': '/transactions',
                    'Transactions Personnelles': '/transactions',
                    'Aperçu des Transactions': '',
                };
            default:
                return {
                    'Detailed Transactions': '/transactions',
                    'Personal Transactions': '/transactions',
                    'Transactions Overview': '',
                };
        }
    }
}
