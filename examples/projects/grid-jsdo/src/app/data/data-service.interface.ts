import { EventEmitter } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { BehaviorSubject } from 'rxjs';
import { DataServiceEvent } from './data-service.event';
import { ModelDataResult } from './model-data-result';

export interface DataServiceInterface<T> {
    errors: BehaviorSubject<Error>;
    events: EventEmitter<DataServiceEvent>;
    fetchedData(): ModelDataResult<T>;
    reset(): void;
    dataChanges(): BehaviorSubject<ModelDataResult<T>>;
    read(state: State): void;
    create(item: any): void;
    update(item: any): void;
    remove(item: any): void;
    batch(deletedItems: any[], createdItems: any[], updatedItems: any[]): void;
    createModel(): T;
}
