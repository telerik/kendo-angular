/* tslint:disable */

export class Stock {
    symbol: string = '';
    name: string = '';
    price: number = 0;
    day_change: number = 0;
    change_pct: number = 0;
    volume: number = 0;
    volume_avg: number = 0;
    market_cap: number = 0;
    pe: number | null = 0;
    intraday: number[] = [0];
}
