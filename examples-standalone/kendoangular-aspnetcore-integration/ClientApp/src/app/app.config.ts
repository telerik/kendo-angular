import { ApplicationConfig, APP_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { ProductService } from './fetch-data/products.service';

function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        ProductService,
        { provide: APP_ID, useValue: 'ng-cli-universal' },
        { provide: 'BASE_URL', useFactory: getBaseUrl },
    ],
};
