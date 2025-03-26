import { StockChartRecord } from '../models/charts-models';

export interface TabStripItem {
  selected: boolean;
  company: string;
  chartData: StockChartRecord[];
}
