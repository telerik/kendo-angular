import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators/catchError';

import { State } from '@progress/kendo-data-query';

import { ModelDataResult } from './model-data-result';
import { DataService } from './data.service';
import { ProgressServiceConfig } from './progress-service-config';
import { DataProviderService } from './service-config';
import { ProgressSessionService } from './progress-session.service';

import { progress } from '@progress/jsdo-core';
import { DataSource, DataSourceOptions, DataResult } from '@progress/jsdo-angular';

export class ProgressService<T> extends DataService<T> {
    public jsdoResource: progress.data.JSDO;
    private dataSource: DataSource;

    constructor(
        protected config: ProgressServiceConfig,
        http: HttpClient,
        dataProviderService: DataProviderService,
        private progressSessionService: ProgressSessionService,
        state: State
    ) {
        super(config, http, dataProviderService, state);
    }

    public batch(deletedItems: any[], createdItems: any[], updatedItems: any[]): void {
        this.handleRequest(this.batchRequest(deletedItems, createdItems, updatedItems), { action: 'batch' });
    }

    protected readRequest(state: State): Observable<HttpResponse<Object>> {
        return this.getDataSource().pipe(
            switchMap(dataSource => dataSource.read(this.getFilterOptions(state))),
            map(data => this.parseDSResponse(data)),
            catchError((error, retry) => _throw(this.getErrorResponse(error)))
        );
    }

    protected createRequest(data: any): Observable<any> {
        return this.handleOperation(dataSource => dataSource.create(data));
    }

    protected updateRequest(data: any): Observable<any> {
        return this.handleOperation(dataSource => dataSource.update(data));
    }

    protected removeRequest(data: any): Observable<any> {
        return this.handleOperation(dataSource => dataSource.remove(data));
    }

    protected batchRequest(deletedItems: any[], createdItems: any[], updatedItems: any[]): Observable<any> {
        return this.handleOperation(dataSource => {
            deletedItems.forEach(item => {
                dataSource.remove(item);
            });

            updatedItems.forEach(item => {
                dataSource.update(item);
            });

            createdItems.forEach(item => {
                dataSource.create(item);
            });
        });
    }

    protected parseResponse(response: HttpResponse<Object>): ModelDataResult<T> {
        return {
            data: this.mapData(response.body['data']),
            total: response.body['total']
        };
    }

    protected getFilterOptions(state: State): progress.data.FilterOptions {
        return this.config.serverOperations ? {
            top: state.take,
            skip: state.skip,
            filter: state.filter,
            sort: state.sort
        } : {};
    }

    protected parseDSResponse(data: DataResult): HttpResponse<Object> {
        return new HttpResponse({
            body: data
        });
    }

    protected getErrorResponse(error): HttpErrorResponse {
        const errorResponse: any = {
            error
        };

        if (error.info && error.info.xhr) {
            errorResponse.status = error.info.xhr.status;
            errorResponse.statusText = error.info.xhr.statusText;
        }

        return new HttpErrorResponse(errorResponse);
    }

    protected handleOperation(operation: (dataSource: DataSource) => void): Observable<any> {
        return this.getDataSource().pipe(
            switchMap(dataSource => {
                operation(dataSource);
                return dataSource.saveChanges();
            }),
            catchError((error, retry) => _throw(this.getErrorResponse(error)))
        );
    }

    protected getDataSource(): Observable<DataSource> {
        if (this.dataSource) {
            return of(this.dataSource);
        }

        return this.progressSessionService.tryCreateSession(this.config.dataProviderName).pipe(
            map(() => {
                this.jsdoResource = this.config.getJsdoResource
                    ? this.config.getJsdoResource(this.config.jsdo)
                    : new progress.data.JSDO(this.config.jsdo);

                const dsOptions = {
                    ...this.config.ds,
                    jsdo: this.jsdoResource
                } as DataSourceOptions;

                if (this.config.serverOperations) {
                    dsOptions.countFnName = this.config.ds.countFnName;
                }

                this.dataSource = new DataSource(dsOptions);
                return this.dataSource;
            })
        );
    }
}
