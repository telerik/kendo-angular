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
    // dropdownlist
    public selected: string;

    public selectedRows: Array<string>;
    public selectedRow: Stock;

    public stockServicesList: Array<string> = [
        'Financial Services',
        'Real Estate'
    ];

    public listItems: Array<string> = [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "2X-Large"
    ];

    public sort: SortDescriptor[] = [];
    public gridView: GridDataResult;

    constructor(private stockDataService: StockDataService) {
        this.stockDataService.getDataStream()
            .subscribe(data => this.gridView = data);

        this.selectedRow = this.gridView.data[0];
        this.selectedRows = [this.selectedRow.symbol];
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.stockDataService.query({ sort: this.sort });
    }

    // dropdownlist
    public handleValueChange(value: string, dropdownlist: any): void {
        this.selected = value;
        dropdownlist.reset();
    }

    public handleSelectionChange(event: SelectionEvent): void {
        if (!(event.selectedRows && event.selectedRows.length)) {
            this.selectedRows = [this.selectedRow.symbol];
            return;
        }

        this.selectedRow = event.selectedRows[0].dataItem;
    }
}
