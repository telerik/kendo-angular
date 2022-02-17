import { Component } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public isVirtual = true;
    public gridView: GridDataResult;
    public data: any[];
    public mode = 'virtual';

    public state: State = {
        skip: 0,
        take: 40,
        sort: []
    };

    public numberOfRows = 100000;
    public numberOfColumns = 100;

    /* Generating Grid Columns */
    public columns = (() => {
        const cols = [{ field: 'id', title: 'ID', width: 80 }];
        for (let c = 1; c <= this.numberOfColumns; c++) {
            cols.push({
                field: `Field_${c}`,
                width: 150,
                title: `Field-${c}`
            });
        }
        return cols;
    })();

    constructor() {
        this.data = this.getData(0, this.numberOfRows);
    }

    public changeMode(newMode: string) {
        this.isVirtual = newMode === 'paging' ? false : true;
        this.state.take = this.isVirtual ? 40 : 15;
        this.state.skip = 0;

        if (this.gridView) {
            this.loadProducts();
        }
    }

    public onChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.loadProducts();
    }

    public loadProducts(): void {
        this.gridView = process(this.data, this.state);
    }

    /* Generating Grid Data */
    public getData = (skip: number, take: number) => {
        const page  = [];
        for (let r = skip + 1; r <= skip + take && r <= this.numberOfRows; r++) {
            const row: any = { id: r };
            for (let c = 1; c <= this.numberOfColumns; c++) {
                row[`Field_${c}`] = `R${r} : C${c}`;
            }
            page.push(row);
        }
        return page;
    };
}
