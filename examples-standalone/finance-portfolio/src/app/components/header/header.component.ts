import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { StockDataService } from '../../services/stock-data.service';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [KENDO_DROPDOWNS]
})
export class HeaderComponent {
    public listItems: Array<string> = ['USD', 'EUR', 'GBP'];
    public selected = this.service.selectedCurrency;

    constructor(public router: Router, private service: StockDataService) {}

    public onCurrencyChange(e: any): void {
        this.service.changeCurrency(e);
    }
}
