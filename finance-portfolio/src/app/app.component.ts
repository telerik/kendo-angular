import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-header></app-header>

        <main class="container-fluid px-0">
            <router-outlet></router-outlet>
            <app-action-buttons></app-action-buttons>
        </main>

        <app-footer></app-footer>
    `
})
export class AppComponent {}
