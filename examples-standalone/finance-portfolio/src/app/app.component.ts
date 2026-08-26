import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, ActionButtonsComponent, NavigationComponent],
    template: `
        <app-header></app-header>
        <app-navigation></app-navigation>

        <main>
            <router-outlet></router-outlet>
            <app-action-buttons></app-action-buttons>
        </main>

        <app-footer></app-footer>
    `
})
export class AppComponent {}
