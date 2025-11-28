import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, withHashLocation } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { provideAnimations } from "@angular/platform-browser/animations";

import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";
import { provideHttpClient } from "@angular/common/http";

bootstrapApplication(AppComponent, {
    providers: [
        provideZoneChangeDetection(),provideRouter(routes, withHashLocation()),
        { provide: APP_BASE_HREF, useValue: "/overview/" },
        provideHttpClient(),
        provideAnimations(),
    ],
}).catch((err) => console.error(err));
