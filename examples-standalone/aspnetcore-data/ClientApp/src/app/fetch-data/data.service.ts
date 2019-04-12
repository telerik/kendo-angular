import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GridDataResult } from '@progress/kendo-angular-grid';
import {
  DataSourceRequestState,
  toDataSourceRequestString,
  translateDataSourceResultGroups
} from '@progress/kendo-data-query';

@Injectable()
export class DataService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

    public fetch(state: DataSourceRequestState): Observable<any> {
        const queryStr = `${toDataSourceRequestString(state)}`;
        const hasGroups = state.group && state.group.length;

        return this.http
            // Send the state to the server
            .get(`${this.baseUrl}api/Products?${queryStr}`).pipe(
              // Process the response
              map(({ data, total }: GridDataResult): GridDataResult => {
                return {
                    data: hasGroups ? translateDataSourceResultGroups(data) : data,
                    total: total
                };
              }
            ));
    }
}
