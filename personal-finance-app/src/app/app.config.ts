import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import '@progress/kendo-angular-intl/locales/en/all';
import '@progress/kendo-angular-intl/locales/de/all';
import '@progress/kendo-angular-intl/locales/es/all';
import '@progress/kendo-angular-intl/locales/fr/all';

import { routes } from './app.routes';
import { Locale, localeData } from '@progress/kendo-angular-intl';
import { CustomMessagesService } from './services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';
import { APP_BASE_HREF } from '@angular/common';

const enData: Locale = localeData('en');

if (enData.numbers && enData.numbers.symbols) {
    enData.numbers.symbols.decimal = '.';
    enData.numbers.symbols.group = ' ';

    (enData.numbers as any)['currency'].patterns[0] = 'n $';
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withHashLocation()),
        importProvidersFrom([BrowserAnimationsModule]),
        { provide: LOCALE_ID, useValue: 'en-US' },
        { provide: MessageService, useClass: CustomMessagesService },
        { provide: APP_BASE_HREF, useValue: '/personal-finance-app/' },
    ],
};
