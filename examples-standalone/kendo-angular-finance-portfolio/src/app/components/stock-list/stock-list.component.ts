import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { take, filter } from 'rxjs/operators';

import { GridDataResult, SelectionEvent } from '@progress/kendo-angular-grid';
import { DialogService, DialogCloseResult } from '@progress/kendo-angular-dialog';
import { SortDescriptor } from '@progress/kendo-data-query';

import { StockDataService } from 'src/app/services/stock-data.service';
import { Stock } from 'src/app/models/stock';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StockListComponent implements OnDestroy {
    public selectedRows: Array<string>;
    public selectedRow: Stock;

    public stockServicesList: Array<string> = [
        'Financial Services',
        'Real Estate'
    ];

    public uncategorizedSymbols: Array<string>;

    public sort: SortDescriptor[] = [];
    public gridView: GridDataResult;

    private confirmRemoveStockSubscription: Subscription;

    constructor(
        private stockDataService: StockDataService,
        private dialogService: DialogService
    ) {
        this.stockDataService.getDataStream()
            .subscribe(data => this.gridView = data);

        this.selectedRow = this.gridView.data[0];
        this.selectedRows = [this.selectedRow.symbol];

        this.uncategorizedSymbols = this.stockDataService.getUncategorizedSymbols();
    }

    public ngOnDestroy(): void {
        if (this.confirmRemoveStockSubscription) {
            this.confirmRemoveStockSubscription.unsubscribe();
        }
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.stockDataService.query({ sort: this.sort });
    }

    public addStockToPortfolio(symbol: string): void {
        this.stockDataService.addToPortfolio(symbol);
        this.uncategorizedSymbols = this.stockDataService.getUncategorizedSymbols();
    }

    public removeStockFromPortfolio(): void {
        if (!(this.selectedRows && this.selectedRows.length)) {
            return;
        }

        if (this.confirmRemoveStockSubscription) {
            this.confirmRemoveStockSubscription.unsubscribe();
        }

        this.confirmRemoveStockSubscription = this.dialogService
            .open({
                title: 'Confirm delete',
                content: `Are you sure you want to delete ${this.selectedRows[0]}?`,
                actions: [
                    { text: 'Cancel' },
                    { text: 'Confirm', primary: true }
                ],
                width: 500,
                height: 245,
                actionsLayout: 'normal'
            })
            .result
            .pipe(
                take(1),
                filter(result => !(result instanceof DialogCloseResult || result.text === 'Cancel'))
            )
            .subscribe(() => {
                const symbol = this.selectedRows[0];
                this.stockDataService.removeFromPortfolio(symbol);
                this.selectedRows = [];
                this.uncategorizedSymbols = this.stockDataService.getUncategorizedSymbols();
            });
    }

    public handleSelectionChange(event: SelectionEvent): void {
        if (!(event.selectedRows && event.selectedRows.length)) {
            this.selectedRows = [this.selectedRow.symbol];
            return;
        }

        this.selectedRow = event.selectedRows[0].dataItem;
    }
}
