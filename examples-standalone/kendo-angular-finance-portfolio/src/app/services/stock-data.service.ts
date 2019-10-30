import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { State, process } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { stocks } from '../data/stocks';
import { Stock } from '../models/stock';

@Injectable()
export class StockDataService {
    public data: BehaviorSubject<GridDataResult> = new BehaviorSubject(process(stocks, {}));

    public getDataStream(): Observable<any> {
        return this.data.asObservable();
    }

    public query(state: State): void {
        const data = process(stocks, state);
        this.data.next(data);
    }

    public getAllStocks(): Array<Stock> {
        return stocks;
    }
}
