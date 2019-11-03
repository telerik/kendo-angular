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
