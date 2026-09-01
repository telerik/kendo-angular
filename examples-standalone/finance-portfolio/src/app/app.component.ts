import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    styleUrl: './app.component.scss',
    template: `
        <app-header></app-header>

        <main>
            <router-outlet></router-outlet>
        </main>

        <app-footer></app-footer>
    `
})
export class AppComponent {}
