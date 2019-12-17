import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
        <app-header></app-header>

        <main class='container-fluid px-0'>
            <div class='container'>
                <app-stock-list></app-stock-list>
                <app-action-buttons></app-action-buttons>
            </div>
        </main>

        <app-footer></app-footer>
    `
})
export class AppComponent {

}
