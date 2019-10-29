import { Component, ViewEncapsulation } from '@angular/core';

import { GridDataResult } from '@progress/kendo-angular-grid';
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

    public selectedRows: Array<Stock>;
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
        this.selectedRows = [this.gridView.data[0]];
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

    public selectBy = (args: any) => {
        this.selectedRow = args.dataItem;
        return args.dataItem;
    }
}
