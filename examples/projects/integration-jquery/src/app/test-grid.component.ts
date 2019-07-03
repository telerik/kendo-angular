import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-test-grid',
    template: `
        <hr />
        <p>Kendo for Angular Grid:</p>
        <kendo-grid
            [data]="gridView"
            [pageSize]="pageSize"
            [skip]="skip"
            [pageable]="{
              buttonCount: buttonCount,
              info: info,
              type: type,
              pageSizes: pageSizes,
              previousNext: previousNext
            }"
            [scrollable]="'none'"
            (pageChange)="pageChange($event)"
          >
        </kendo-grid>
    `
})
export class TestGridComponent {
    gridView: GridDataResult;

    buttonCount: 5;
    info = true;
    type: 'numeric' | 'input' = 'numeric';
    pageSizes = true;
    previousNext = true;

    pageSize = 5;
    skip = 0;
    products: any[] = Array(100).fill({}).map((x, idx) => ({
        ProductID: idx,
        ProductName: 'Product' + idx,
        Discontinued: idx % 2 === 0
    }));

    constructor() {
        this.loadProducts();
    }

    pageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.pageSize = take;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: this.products.slice(this.skip, this.skip + this.pageSize),
            total: this.products.length
        };
    }
}
