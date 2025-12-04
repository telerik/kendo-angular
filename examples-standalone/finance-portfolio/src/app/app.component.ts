import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, ActionButtonsComponent],
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
