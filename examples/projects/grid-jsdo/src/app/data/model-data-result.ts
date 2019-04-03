import { DataResult } from '@progress/kendo-data-query';

export class ModelDataResult<T> implements DataResult {
    public data: T[];
    public total: number;
}
