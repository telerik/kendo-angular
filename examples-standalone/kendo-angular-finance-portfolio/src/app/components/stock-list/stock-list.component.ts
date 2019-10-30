import { Component, ViewEncapsulation } from '@angular/core';

import { GridDataResult, SelectionEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';

import { StockDataService } from 'src/app/services/stock-data.service';
import { Stock } from 'src/app/models/stock';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StockListComponent {

    public selectedRows: Array<string>;
    public selectedRow: Stock;

    public stockServicesList: Array<string> = [
        'Financial Services',
        'Real Estate'
    ];

    public uncategorizedSymbols: Array<string>;

    public sort: SortDescriptor[] = [];
    public gridView: GridDataResult;

    constructor(private stockDataService: StockDataService) {
        this.stockDataService.getDataStream()
            .subscribe(data => this.gridView = data);

        this.selectedRow = this.gridView.data[0];
        this.selectedRows = [this.selectedRow.symbol];

        this.uncategorizedSymbols = this.stockDataService.getUncategorizedSymbols();
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.stockDataService.query({ sort: this.sort });
    }

    public addStockDetails(symbol: string): void {
        this.stockDataService.addToPortfolio(symbol);
        this.uncategorizedSymbols = this.stockDataService.getUncategorizedSymbols();
    }

    public handleSelectionChange(event: SelectionEvent): void {
        if (!(event.selectedRows && event.selectedRows.length)) {
            this.selectedRows = [this.selectedRow.symbol];
            return;
        }

        this.selectedRow = event.selectedRows[0].dataItem;
    }
}
