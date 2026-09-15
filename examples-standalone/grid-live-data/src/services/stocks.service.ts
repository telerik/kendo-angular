import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StocksService {
    private stocksUrl: string = 'assets/data.json';
    private immutableData!: Stock[];
    public previousData: Stock[] = [];

    public updateFreq: number = 2000;

    constructor(private http: HttpClient) {}

    getDataObservable(): Observable<Stock[]> {
        return new Observable<Stock[]>((observer) => {
            let intervalId: ReturnType<typeof setInterval> | undefined;
            const subscription = this.http.get<Stock[]>(this.stocksUrl).subscribe({
                next: (data) => {
                    this.immutableData = data;
                    this.previousData = data;
                    observer.next(this.immutableData);

                    intervalId = setInterval(() => {
                        this.previousData = this.immutableData;
                        this.immutableData = this.immutableData.map((row) => this.updateRandomRowWithData(row));
                        observer.next(this.immutableData);
                    }, this.updateFreq);
                },
                error: (error: unknown) => observer.error(error)
            });

            return () => {
                subscription.unsubscribe();
                if (intervalId) {
                    clearInterval(intervalId);
                }
            };
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

            return {
                ...row,
                change_24h: percentageValue,
                currentPrice: priceValue
            };
        }

        return row;
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
