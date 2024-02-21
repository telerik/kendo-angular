import { SeriesStack, SeriesType } from '@progress/kendo-angular-charts';

export interface Stock {
    symbol: string;
    name: string;
    price: number;
    day_change: number;
    change_pct: number;
    volume: number;
    volume_avg: number;
    market_cap: number;
    pe: number | null;
    intraday: number[];
    index?: number;
}

export interface ChartConfig {
    seriesType: SeriesType;
    chartName?: string;
    stack: string | boolean | SeriesStack;
}
