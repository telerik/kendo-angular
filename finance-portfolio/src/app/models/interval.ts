import { BaseUnit } from '@progress/kendo-angular-charts';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';

export interface Interval {
    unit: 'minutes' | 'hours' | 'days' | 'weeks';
    step: number;
}

// maps a unit to the corresponding number of minutes
export const IntervalUnitsMap = {
    minutes: 1,
    hours: 60,
    days: 1440,
    weeks: 10080
};

export const defaultRange: SelectionRange = { start: new Date(Date.now() - 604800000), end: new Date(Date.now()) };
