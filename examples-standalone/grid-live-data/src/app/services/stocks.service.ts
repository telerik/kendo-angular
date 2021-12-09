import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StocksService {
    private stocksUrl: string = 'assets/data.json';
    private immutableData!: Stock[];
    public updateFreq: number = 1000;
    public data: Stock[] = [];

    constructor(private http: HttpClient) {}

    getDataObservable(): Observable<Stock[]> {
        return new Observable<Stock[]>((observer) => {
            this.http.get<Stock[]>(this.stocksUrl).subscribe((data: Stock[]) => {
                this.immutableData = data;
                observer.next(this.immutableData);

                setInterval(() => {
                    this.data = this.immutableData.slice();
                    this.immutableData = this.immutableData.map((row: Stock) => this.updateRandomRowWithData(row));
                    observer.next(this.immutableData);
                }, this.updateFreq);
            });
        });
    }

    updateRandomRowWithData(row: Stock): Stock {
        const shouldUpdateData = Math.random() < 0.3;
        if (shouldUpdateData) {
            let changePrice = Math.floor(30 * Math.random()) / 10;
            changePrice *= Math.round(Math.random()) ? 2 : -0.09;

            let changePercentage = Math.floor(30 * Math.random()) / 10;
            changePercentage *= Math.round(Math.random()) ? 1 : -1;

            const percentageValue = row.change_24h + changePercentage;
            const priceValue = row.currentPrice + changePrice;

            let newRow = { ...row, change_24h: percentageValue, currentPrice: priceValue };

            return newRow;
        } else {
            return row;
        }
    }
}

export interface Stock {
    id: number;
    currency: string;
    symbol: string;
    volume: number;
    currentPrice: number;
    change_24h: number;
}
