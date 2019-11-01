import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { State, process } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';

// the two collections are mutated directly, simulating an in-memory db data persistence
import { stocksInPortfolio, uncategorizedStocks, heatmapStocks } from '../data/stocks';
import { Stock } from '../models/stock';

@Injectable()
export class StockDataService {
    public data: BehaviorSubject<GridDataResult> = new BehaviorSubject(process(stocksInPortfolio, {}));

    private selectedCurrency = 'USD';

    public getDataStream(): Observable<any> {
        return this.data
            .pipe(map((stocks) => {
                if (this.selectedCurrency === 'USD') {
                    return stocks;
                }

                return stocks.data.map((item) => ({ ...item, price: this.convertCurrency(item) }));
            }));
    }

    public query(state: State): void {
        const data = process(stocksInPortfolio, state);
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

        this.data.next(process(stocksInPortfolio, {}));
    }

    public addToPortfolio(symbol: string): void {
        const targetIndex = uncategorizedStocks.findIndex(stock => stock.symbol === symbol);
        const target = uncategorizedStocks.splice(targetIndex, 1)[0];

        stocksInPortfolio.unshift(target);
        this.data.next(process(stocksInPortfolio, {}));
    }

    public removeFromPortfolio(symbol: string): void {
        const targetIndex = stocksInPortfolio.findIndex(stock => stock.symbol === symbol);
        const target = stocksInPortfolio.splice(targetIndex, 1)[0];

        uncategorizedStocks.unshift(target);
        this.data.next(process(stocksInPortfolio, {}));
    }

    public getUncategorizedSymbols(): string[] {
        return uncategorizedStocks.map(stock => stock.symbol);
    }
}
