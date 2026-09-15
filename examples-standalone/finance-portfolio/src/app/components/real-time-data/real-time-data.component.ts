import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { GridDataResult, KENDO_GRID, PageChangeEvent } from '@progress/kendo-angular-grid';

import { StockDataService } from '../../services/stock-data.service';

interface VirtualStock {
    id: number;
    symbol: string;
    name: string;
    price: number;
    change: number;
    stockExchange: string;
    timeZone: string;
    yearHigh: string;
    yearLow: string;
    volume: string;
    marketCap: string;
}

@Component({
    selector: 'app-real-time-data',
    templateUrl: './real-time-data.component.html',
    styleUrls: ['./real-time-data.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule, KENDO_GRID]
})
export class RealTimeDataComponent implements OnInit, OnDestroy {
    public gridView: GridDataResult = { data: [], total: 0 };
    public readonly pageSize = 48;
    public skip = 0;

    private data: VirtualStock[];
    private updateTimer?: ReturnType<typeof setInterval>;

    constructor(public readonly stockDataService: StockDataService) {
        this.data = this.createRandomData(10000);
        this.loadPage();
    }

    public ngOnInit(): void {
        this.updateTimer = setInterval(() => {
            this.data.forEach((item) => {
                item.change = this.getChange();
                item.price += item.change;
            });
            this.loadPage();
        }, 1500);
    }

    public ngOnDestroy(): void {
        if (this.updateTimer) {
            clearInterval(this.updateTimer);
        }
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadPage();
    }

    private loadPage(): void {
        this.gridView = {
            data: this.data.slice(this.skip, this.skip + this.pageSize),
            total: this.data.length
        };
    }

    private createRandomData(count: number): VirtualStock[] {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array.from({ length: count }, (_, index) => {
            const symbol = Array.from({ length: 4 }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
            const price = Math.random() * 100 + 10;

            return {
                id: index + 1,
                symbol,
                name: `${symbol} Inc.`,
                price,
                change: this.getChange(),
                stockExchange: 'New York Stock Exchange',
                timeZone: 'America/New_York',
                yearHigh: (price + price / 3).toFixed(2),
                yearLow: (price - price / 3).toFixed(2),
                volume: (21774241 * Math.random() * 50).toFixed(0),
                marketCap: (229956956 * Math.random() * 50).toFixed(0)
            };
        });
    }

    private getChange(): number {
        const random = Math.random();
        return random > 0.5 ? (random > 0.75 ? -Math.random() * 2 : Math.random() * 2) : 0;
    }
}
