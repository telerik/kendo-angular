import { Component } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { DataSourceRequestState } from '@progress/kendo-data-query';
import { DataService } from './data.service';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public products: GridDataResult;
    public state: DataSourceRequestState = {
        skip: 0,
        take: 5
    };

    constructor(private dataService: DataService) {
        this.dataService.fetch(this.state).subscribe(result => this.products = result);
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.dataService.fetch(state)
            .subscribe(r => this.products = r);
    }
}
