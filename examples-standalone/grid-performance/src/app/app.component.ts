import { Component } from '@angular/core';
import { DataStateChangeEvent, GridDataResult, KENDO_GRID } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { FormsModule } from '@angular/forms';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-root',
  imports: [FormsModule, KENDO_GRID, KENDO_LABELS, KENDO_BUTTONS, KENDO_INPUTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    public gridView: GridDataResult = {
        total: 0,
        data: []
    };
    public data: any[];
    public mode = 'virtual';

    public state: State = {
        skip: 0,
        take: 40,
        sort: [],
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
            title: `Field-${c}`,
        });
        }
        return cols;
    })();

    constructor() {
        this.data = this.getData(0, this.numberOfRows);
    }

    public changeMode(newMode: string) {
        this.mode = newMode;

        if (newMode === 'virtualPaging') {
            this.state.take = 1000;
        } else if (newMode === 'virtual') {
            this.state.take = 40;
        } else {
            this.state.take = 15;
        }
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
        const page = [];
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
