import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { GridDataResult } from '@progress/kendo-angular-grid';
import {
    State,
    toDataSourceRequestString,
    translateDataSourceResultGroups,
} from '@progress/kendo-data-query';

@Injectable()
export class DataService extends BehaviorSubject<any[]> {

    constructor(private http: HttpClient) {
        super([]);
    }

    private BASE_URL = 'api/Blogs';
    private data: any[] = [];
    public state: State = {
        skip: 0,
        take: 5,
        filter: { filters: [], logic: 'or' },
        group: [],
        sort: []
    };

    public read() {

        if (this.data.length) {

            return super.next(this.data);
        }

        this.fetch()
            .pipe(
                tap((data: any) => {

                    this.data = data;
                })
            )
            .subscribe((data:any) => {

                super.next(data);
            });
    }


    public fetch(dataItem?: any, action: string = ''): any {

        switch (action) {
            case '': {

                const queryStr = `${toDataSourceRequestString(this.state)}`;

                const hasGroups = this.state.group && this.state.group.length;

                return this.http.get(`${this.BASE_URL}`).pipe(
                    // Process the response
                    map((result: any): any => {
                        console.log(result)
                        // return {
                        //     data: hasGroups ? translateDataSourceResultGroups(result.data) : result.data,
                        //     total: result.total
                        // };
                    }
                    ));
            }
            case 'create': {
                return this.http.post(`${this.BASE_URL}`, dataItem);
            }
            case 'edit': {
                return this.http.put(`${this.BASE_URL}/${dataItem.blogId}`, dataItem);
            }
            case 'delete': {
                const options = {
                    headers: {},
                    body: dataItem,
                };

                return this.http.delete(`${this.BASE_URL}/${dataItem.blogId}`, options);
            }
        }
    }

    public save(dataItem: any, isNew?: boolean) {
        if (isNew) {
            const newBlog = { Url: dataItem.url };
            this.fetch(newBlog, 'create').subscribe(() => this.read(), () => this.read());
        } else {
            this.fetch(dataItem, 'edit').subscribe(() => this.read(), () => this.read());
        }
    }

    public delete(dataItem: any) {
        this.fetch(dataItem, 'delete').subscribe(() => this.read(), () => this.read());
    }
}