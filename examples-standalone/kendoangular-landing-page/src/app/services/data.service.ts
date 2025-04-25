import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { data, prices, changes, assetTypes, statuses, companies } from '../data/dynamic-data';
import { DynamicGridItem } from '../models/dynamic-grid-item';
import { CompositeFilterDescriptor, FilterDescriptor, SortDescriptor, State } from '@progress/kendo-data-query';
import { process, orderBy, filterBy } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private completeDataset: DynamicGridItem[] = [];
    public currentData: DynamicGridItem[] = [];
    public previousData: DynamicGridItem[] = [];

    private intervalId: any;
    private totalRecords: number = 100;
    private updateInterval: number = 100;

    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    private dataSubject = new BehaviorSubject<DynamicGridItem[]>([]);
    private _total: number = 0;
    private gridState: State = {
        sort: [],
        skip: 0,
        take: 50,
    };

    public get total(): number {
        return this._total;
    }

    constructor() {
        this.updateInternalGridDataLength();
    }

    public fetchData(state?: State): Observable<GridDataResult> {
        this.loadingSubject.next(true);

        if (state) {
            this.gridState = { ...state };
        }

        // Reset data and start the refresh interval
        this.currentData = this.completeDataset.slice();
        this.previousData = this.completeDataset.slice();

        // Apply grid state operations to the current data
        this.applyGridState();

        // Clear any existing interval
        this.stopDataRefresh();

        // Start new interval with current settings
        this.startDataRefresh();

        setTimeout(() => this.loadingSubject.next(false), 300);

        // Return the observable that will receive updates
        return this.dataSubject.asObservable().pipe(map((data) => ({ data: data, total: this._total })));
    }

    public updateRefreshInterval(newInterval: number): void {
        this.updateInterval = newInterval;

        // Restart the interval with new timing if active.
        if (this.intervalId) {
            this.stopDataRefresh();
            this.startDataRefresh();
        }
    }

    public updateTotalRecords(newTotal: number): void {
        this.totalRecords = newTotal;
        this.updateInternalGridDataLength();

        // Update current data with new dataset
        if (this.dataSubject.observers.length > 0) {
            this.currentData = this.completeDataset.slice();
            this.previousData = this.completeDataset.slice();

            // Apply grid state to the new data
            this.applyGridState();

            this.dataSubject.next(this.currentData);
        }
    }

    public updateGridState(state: State): void {
        this.gridState = { ...state };

        if (this.dataSubject.observers.length > 0) {
            this.applyGridState();
            this.dataSubject.next(this.currentData);
        }
    }

    private applyGridState(): void {
        // Process the data with Kendo Data Query operations
        const result = process(this.completeDataset, this.gridState);
        this.currentData = result.data;
        this.previousData = this.currentData.slice();

        if (this.gridState.filter) {
            this._total = result.total;
        } else {
            this._total = this.completeDataset.length;
        }
    }

    private startDataRefresh(): void {
        this.intervalId = setInterval(() => {
            this.completeDataset = this.completeDataset.map((row) =>
                Math.random() < 0.1 ? this.updateRandomRow(row) : row
            );

            this.applyGridState();

            this.dataSubject.next(this.currentData);
        }, this.updateInterval);
    }

    private stopDataRefresh(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private generateGridData(): DynamicGridItem[] {
        return Array.from({ length: this.totalRecords }, (_, index) => ({
            id: index + 1,
            assetType: assetTypes[Math.floor(Math.random() * assetTypes.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)] as 'Filled' | 'Open' | 'Rejected',
            company: companies[Math.floor(Math.random() * companies.length)],
            price: prices[Math.floor(Math.random() * prices.length)],
            change: changes[Math.floor(Math.random() * changes.length)],
            timeline: Array(50).fill(prices[index % prices.length]),
        }));
    }

    private updateInternalGridDataLength(): void {
        this.completeDataset = this.generateGridData();
    }

    private updateRandomRow(item: DynamicGridItem): DynamicGridItem {
        const newPrice = prices[Math.floor(Math.random() * prices.length)];
        const newChange = changes[Math.floor(Math.random() * changes.length)];
        const updatedTimeline = [...item.timeline.slice(1), newPrice];

        return {
            ...item,
            price: newPrice,
            change: newChange,
            timeline: updatedTimeline,
        };
    }
}
