import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { take, filter } from 'rxjs/operators';

import { SelectionEvent } from '@progress/kendo-angular-grid';
import { DialogService, DialogCloseResult } from '@progress/kendo-angular-dialog';
import { SortDescriptor } from '@progress/kendo-data-query';

import { Subscription } from 'rxjs';
import { Stock } from '../../models';
import { StockDataService } from '../../services/stock-data.service';
import { SVGIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StockListComponent implements OnDestroy {
    public trashIcon: SVGIcon = trashIcon;
    public plusIcon: SVGIcon = plusIcon;
    public selectedRows: Array<string> = [];

    public uncategorizedSymbols: Array<string>;

    public sort: SortDescriptor[] = [];
    public gridView: Stock[] = [];

    private confirmRemoveStockSubscription: Subscription | undefined;

    constructor(public stockDataService: StockDataService, private dialogService: DialogService) {
        this.stockDataService.getDataStream().subscribe((data) => (this.gridView = data));

        if (this.gridView && this.gridView.length) {
            this.stockDataService.selectedStock = this.gridView[0];
            this.selectedRows = [this.gridView[0].symbol];
        }

        this.uncategorizedSymbols = this.stockDataService.getUncategorizedSymbols();
    }

    public ngOnDestroy(): void {
        if (this.confirmRemoveStockSubscription) {
            this.confirmRemoveStockSubscription.unsubscribe();
        }
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.stockDataService.query(this.sort);
    }

    public addStockToPortfolio(symbol: string): void {
        this.stockDataService.addToPortfolio(symbol);
        this.uncategorizedSymbols = this.stockDataService.getUncategorizedSymbols();
        this.sort = [];
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
                actions: [{ text: 'Cancel' }, { text: 'Confirm', themeColor: 'primary' }],
                width: 500,
                height: 245,
                actionsLayout: 'stretched'
            })
            .result.pipe(
                take(1),
                filter((result) => !(result instanceof DialogCloseResult || result.text === 'Cancel'))
            )
            .subscribe(() => {
                const symbol = this.selectedRows[0];
                this.stockDataService.removeFromPortfolio(symbol);
                this.selectedRows = [];
                this.uncategorizedSymbols = this.stockDataService.getUncategorizedSymbols();
                this.sort = [];
            });
    }

    public handleSelectionChange(event: SelectionEvent): void {
        if (!(event.selectedRows && event.selectedRows.length)) {
            this.selectedRows = [this.stockDataService.selectedStock.symbol];
            return;
        }

        this.stockDataService.selectedStock = event.selectedRows[0].dataItem;
    }
}
