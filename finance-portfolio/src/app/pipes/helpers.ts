import { getDate, addDays, MS_PER_DAY } from '@progress/kendo-date-math';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';
import { defaultRange } from '../models';

export const formatCurrency = (value: number): any => {
    if (value >= 1000000000) {
        return (value / 1000000000).toFixed(3) + 'B';
    }

    if (value >= 1000000) {
        return (value / 1000000).toFixed(3) + 'M';
    }

    if (value >= 1000) {
        return (value / 1000).toFixed(3) + 'K';
    }

    return value;
};

export const dateInRange = (candidate: Date, min: Date, max: Date): Date => {
    if (!candidate) {
        return candidate;
    }

    if (min && candidate < min) {
        return min;
    }

    if (max && candidate > max) {
        return max;
    }

    return candidate;
};

export const isDateInRange = (candidate: Date, min: Date, max: Date): boolean =>
    !candidate || !((min && min > candidate) || (max && max < candidate));

export const normalizeSelectionRange = (start: Date, end: Date, min: Date, max: Date): SelectionRange => {
    if (!(start && end && isDateInRange(start, min, max) && isDateInRange(end, min, max))) {
        return defaultRange;
    }

    const normalizedStart = getDate(start);
    const normalizedEnd = addDays(end, 1);

    return {
        start: dateInRange(normalizedStart, min, max),
        end: dateInRange(normalizedEnd, min, max)
    };
};

export const rangeAndIntervalCompatible = (rangeDuration: number, intervalDuration: number) => {
    // disallow the selection of intervals greater than the currently selected range
    const intervalGreaterThanRange = intervalDuration > rangeDuration;

    // disallow the selection of intervals smaller than 1 hour for ranges greater than 3 days
    const intervalTooSmallForRange = rangeDuration > MS_PER_DAY * 3 && intervalDuration < MS_PER_DAY / 24;

    return !intervalGreaterThanRange && !intervalTooSmallForRange;
};
