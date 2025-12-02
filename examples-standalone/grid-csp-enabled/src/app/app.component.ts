import { Component } from '@angular/core';

import { GridModule } from '@progress/kendo-angular-grid';
import { customers } from './customers';

@Component({
    selector: 'app-root',
    imports: [GridModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'grid-csp-enabled';
    public gridData: any[] = customers;
}
