import { series } from './data';
import { SeriesStack } from '@progress/kendo-angular-charts';

export function getTitle(fieldName: string): string {
    return series.find((item: any) => item.field === fieldName)['title'];
}

export function getChartStack(chartTitle: string): boolean | SeriesStack {
    switch (chartTitle) {
        case 'Stack Area':
            return { type: 'normal' };
        case '100% Stack Area':
            return { type: '100%' };
        case 'Stack Bar':
            return { type: 'normal' };
        case '100% Stack Bar':
            return { type: '100%' };
        case 'Stack Column':
            return { type: 'normal' };
        case '100% Stack Column':
            return { type: '100%' };
        default:
            return false;
    }
}

export function getChartType(chartTitle: string): string {
    switch (chartTitle) {
        case 'Stack Area':
            return 'area';
        case '100% Stack Area':
            return 'area';
        case 'Stack Bar':
            return 'bar';
        case '100% Stack Bar':
            return 'bar';
        case 'Stack Column':
            return 'column';
        case '100% Stack Column':
            return 'column';
        case 'Radar':
            return 'radarLine';
        default:
            return chartTitle.toLowerCase();
    }
}
