import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, FooterComponent, StockListComponent, ActionButtonsComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'grid-charts-integration';
}
