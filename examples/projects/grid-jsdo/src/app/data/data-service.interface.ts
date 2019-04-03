import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { State } from '@progress/kendo-data-query';
import { ModelDataResult } from './model-data-result';
import { DataServiceEvent } from './data-service.event';

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
