import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { State, process } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';

// the two collections are mutated directly, simulating an in-memory db data persistence
import { stocksInPortfolio, uncategorizedStocks } from '../data/stocks';
import { Stock } from '../models/stock';

@Injectable()
export class StockDataService {
    public data: BehaviorSubject<GridDataResult> = new BehaviorSubject(process(stocksInPortfolio, {}));

    public getDataStream(): Observable<any> {
        return this.data.asObservable();
    }

    public query(state: State): void {
        const data = process(stocksInPortfolio, state);
        this.data.next(data);
    }

    public getAllStocks(): Array<Stock> {
        return stocksInPortfolio;
    }

    public addToPortfolio(symbol: string): void {
        const targetIndex = uncategorizedStocks.findIndex(stock => stock.symbol === symbol);
        const target = uncategorizedStocks.splice(targetIndex, 1)[0];

        stocksInPortfolio.unshift(target);
        this.data.next(process(stocksInPortfolio, {}));
    }

    public getUncategorizedSymbols(): string[] {
        return uncategorizedStocks.map(stock => stock.symbol);
    }
}
