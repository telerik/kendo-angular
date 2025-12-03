import { Component } from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { customers } from './customers';

@Component({
    selector: 'app-root',
    imports: [KENDO_GRID],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'grid-csp-enabled';
    public gridData: any[] = customers;
}
