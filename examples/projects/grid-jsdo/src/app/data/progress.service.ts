import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { DataResult, DataSource, DataSourceOptions } from '@progress/jsdo-angular';
import { progress } from '@progress/jsdo-core';
import { State } from '@progress/kendo-data-query';
import { DataService } from './data.service';
import { ModelDataResult } from './model-data-result';
import { ProgressServiceConfig } from './progress-service-config';
import { ProgressSessionService } from './progress-session.service';
import { DataProviderService } from './service-config';

import { Observable, throwError, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';


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

    protected readRequest(state: State): Observable<HttpResponse<object>> {
        return this.getDataSource().pipe(
            switchMap(dataSource => dataSource.read(this.getFilterOptions(state))),
            map(data => this.parseDSResponse(data)),
            catchError((error, retry) => throwError(this.getErrorResponse(error)))
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

    protected parseResponse(response: HttpResponse<any>): ModelDataResult<T> {
        return {
            data: this.mapData(response.body.data),
            total: response.body.total
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

    protected parseDSResponse(data: DataResult): HttpResponse<object> {
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
            catchError((error, retry) => throwError(this.getErrorResponse(error)))
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
