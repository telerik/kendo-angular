import { Component, ViewEncapsulation } from '@angular/core';
import { RowClassArgs } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { Stock, StocksService } from './services/stocks.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public gridData: Observable<Stock[]>;
    public prevDataItem!: Stock;

    constructor(private stockService: StocksService) {
        this.gridData = this.stockService.getDataObservable();
    }

    public rowCallback = (context: RowClassArgs) => {
        const previousData = this.stockService.previousData;
        const index = previousData.findIndex((item) => item.id === context.dataItem.id);
        this.prevDataItem = previousData[index];

        if (context.dataItem.change_24h > 0) {
            return { 'price-up': true };
        } else {
            return { 'price-down': true };
        }
    };
}
