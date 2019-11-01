import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { orderBy, SortDescriptor } from '@progress/kendo-data-query';

// the two collections are mutated directly, simulating an in-memory db data persistence
import { stocksInPortfolio, uncategorizedStocks, heatmapStocks } from '../data/stocks';
import { Stock } from '../models/stock';
import { StockIntervalDetails } from '../models';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';

@Injectable()
export class StockDataService {
    public data: BehaviorSubject<Stock[]> = new BehaviorSubject(stocksInPortfolio);

    public selectedCurrency = 'USD';
    public selectedStock: Stock;

    public getDataStream(): Observable<Stock[]> {
        return this.data
            .pipe(map((stocks) => {
                if (this.selectedCurrency === 'USD') {
                    return stocks;
                }

                return stocks.map((item) => ({ ...item, price: this.convertCurrency(item) }));
            }));
    }

    public query(sort: SortDescriptor[] = []): void {
        const data = orderBy(stocksInPortfolio, sort);
        this.data.next(data);
    }

    public getHeatmapStocks(): Array<any> {
        return heatmapStocks;
    }

    public convertCurrency(dataItem: Stock): any {
        const currency = { GBP: 0.77, EUR: 0.9 };

        if (this.selectedCurrency === 'USD') { return dataItem.price; }

        return Number((dataItem.price * currency[this.selectedCurrency]).toFixed(2));
    }

    public changeCurrency(selectedCurrency: string): void {
        this.selectedCurrency = selectedCurrency;
        this.data.next(stocksInPortfolio);
    }

    public addToPortfolio(symbol: string): void {
        const targetIndex = uncategorizedStocks.findIndex(stock => stock.symbol === symbol);
        const target = uncategorizedStocks.splice(targetIndex, 1)[0];

        stocksInPortfolio.unshift(target);
        this.data.next(stocksInPortfolio);
    }

    public removeFromPortfolio(symbol: string): void {
        const targetIndex = stocksInPortfolio.findIndex(stock => stock.symbol === symbol);
        const target = stocksInPortfolio.splice(targetIndex, 1)[0];

        uncategorizedStocks.unshift(target);
        this.data.next(stocksInPortfolio);
    }

    public getUncategorizedSymbols(): string[] {
        return uncategorizedStocks.map(stock => stock.symbol);
    }

    public getStockIntervalDetails(symbol: string, range: SelectionRange, interval: number): StockIntervalDetails[] {
        return [];
    }
}
