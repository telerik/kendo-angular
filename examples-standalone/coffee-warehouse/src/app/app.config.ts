import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MessageService } from '@progress/kendo-angular-l10n';

import { routes } from './app.routes';
import { CustomMessagesService } from './services/custom-messages.service';
import { ProfileImageService } from './services/profile-image.service';

import '@progress/kendo-angular-intl/locales/en/all';
import '@progress/kendo-angular-intl/locales/es/all';
import '@progress/kendo-angular-intl/locales/fr/all';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: MessageService, useClass: CustomMessagesService },
    { provide: LOCALE_ID, useValue: 'en-US' },
    ProfileImageService
  ]
};
