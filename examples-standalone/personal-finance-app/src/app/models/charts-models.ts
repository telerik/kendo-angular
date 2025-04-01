export interface PieData {
    category: string;
    value: number;
}

export interface StockChartRecord {
    volume: number;
    open: number;
    close: number;
    high: number;
    low: number;
    date: string;
}

export interface YearlySalesData {
    month: string;
    flow: number;
}

export interface DailySales {
    day: string;
    sales: number;
}

export interface MonthlySalesData {
    [month: string]: DailySales[];
}
