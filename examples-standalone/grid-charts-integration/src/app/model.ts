import { SeriesStack } from '@progress/kendo-angular-charts';

export interface Stock {
    symbol: string;
    name: string;
    price: number;
    day_change: number;
    change_pct: number;
    volume: number;
    volume_avg: number;
    market_cap: number;
    pe: number;
    intraday: number[];
    index?: number;
}

export interface ChartConfig {
    seriesType: string;
    chartName: string;
    stack: boolean | SeriesStack;
}
