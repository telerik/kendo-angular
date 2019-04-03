import { EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

import { process, State } from '@progress/kendo-data-query';

import { DataServiceInterface } from './data-service.interface';
import { DataServiceConfig, DataServiceRequest, DataProviderService } from './service-config';
import { ModelDataResult } from './model-data-result';
import { DataServiceEvent } from './data-service.event';

export abstract class DataService<T> implements DataServiceInterface<T> {
    // in case someone wants to refresh the data with the current state
    public state: State;
    public readonly errors = new BehaviorSubject<Error>(null);
    public readonly events = new EventEmitter<DataServiceEvent>();
    public pendingData: boolean;

    protected dataResult: ModelDataResult<T>;

    private shouldFetch = true;
    private dataStream: BehaviorSubject<ModelDataResult<T>> = new BehaviorSubject<ModelDataResult<T>>(null);

    constructor(
        protected config: DataServiceConfig,
        protected http: HttpClient,
        protected dataProviderService: DataProviderService,
        protected initialState: State = {}
    ) { }

    public dataChanges(): BehaviorSubject<ModelDataResult<T>> {
        return this.dataStream;
    }

    public read(state?: State): void {
        if (state) {
            this.state = state;
        } else {
            this.state = this.initialState;
        }

        if (!this.config.serverOperations && this.dataResult && this.dataResult.data.length) {
            const currentData: ModelDataResult<T> = process(this.dataResult.data, this.state);
            return this.dataStream.next(currentData);
        }

        if (this.shouldFetch) {
            this.shouldFetch = false;
            this.pendingData = true;
            const requestState = this.config.serverOperations ? this.state : {};

            this.readRequest(requestState)
                .pipe(
                    map(response => this.parseResponse(response)),
                    tap(data => this.dataResult = data)
                )
                .subscribe(data => {
                    this.shouldFetch = true;
                    this.pendingData = false;

                    if (!this.config.serverOperations) {
                        data = process(data.data, this.state);
                    }

                    this.dataStream.next(data);
                }, (err: HttpErrorResponse) => {
                    this.shouldFetch = true;
                    this.pendingData = false;
                    this.handleError(err);
                    this.dataStream.next(this.dataResult || { data: [], total: 0 });
                });
        }
    }

    public create(item: any): void {
        this.handleRequest(this.createRequest(item), { action: 'create' });
    }

    public update(item: any): void {
        this.handleRequest(this.updateRequest(item), { action: 'update' });
    }

    public remove(item: any): void {
        this.handleRequest(this.removeRequest(item), { action: 'remove' });
    }

    public batch(deletedItems: any[], createdItems: any[], updatedItems: any[]): void {
        deletedItems.forEach(item => {
            this.remove(item);
        });
        updatedItems.forEach(item => {
            this.update(item);
        });
        createdItems.forEach(item => {
            this.create(item);
        });
    }

    public fetchedData(): ModelDataResult<T> {
        return this.dataResult;
    }

    public reset(): void {
        this.dataResult = null;
    }

    public createModel(): T {
        return this.config.createModel();
    }

    protected request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        reportProgress?: boolean;
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>> {
        options.headers = options.headers || new HttpHeaders();

        return this.http.request(method, url, options);
    }

    protected handleRequest(request: Observable<any>, event: DataServiceEvent): void {
        this.reset();

        request.subscribe(() => {
            this.read(this.state);
            this.events.emit(event);
        }, (err: HttpErrorResponse) => {
            this.handleError(err);
        });
    }

    protected abstract readRequest(state: State): Observable<HttpResponse<Object>>;
    protected abstract createRequest(data: any): Observable<any>;
    protected abstract updateRequest(data: any): Observable<any>;
    protected abstract removeRequest(data: any): Observable<any>;
    protected abstract parseResponse(response: HttpResponse<Object>): ModelDataResult<T>;

    protected getAbsoluteUrl(request: DataServiceRequest): string {
        const dataProvider = this.dataProviderService.get(this.config.dataProviderName);
        let serviceUri = dataProvider ? dataProvider.serviceUri : '';
        serviceUri = serviceUri.replace(/[/]$/, '') + '/';

        const resourceUrl = Object.keys(request.routeParams || {}).reduce((prev, current) => {
            const regEx = new RegExp(':' + current, 'gi');
            return prev.replace(regEx, request.routeParams[current]);

        }, request.url);

        const queryString = request.queryString && request.queryString.length ? '?' + request.queryString : '';

        return `${serviceUri}${resourceUrl}${queryString}`;
    }

    protected getQueryString(state: State): string {
        return '';
    }

    protected mapData(data: any[]): T[] {
        if (this.config.mapData) {
            return data.map(item => this.config.mapData(item));
        }

        return data;
    }

    protected handleError(err: HttpErrorResponse) {
        this.errors.next(err);
    }
}
