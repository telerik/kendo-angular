import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

declare var kendo: any;

@Component({
    selector: 'test-slider',
    template: `
        <p>Kendo UI for Angular Splitter with nested Angular components:</p>
        <div #splitter>
          <div id="pane-1">
            <kendo-slider [min]="min"
                      [max]="max"
                      [smallStep]="smallStep"
                      [showButtons]="showButtons"
                      [tickPlacement]="tickPlacement"
                      [(ngModel)]="sliderValue"></kendo-slider>
          </div>
          <div id="pane-2">
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
          </div>
        </div>
    `
})
export class TestSplitterComponent {
    constructor(private hostEl: ElementRef) {
        this.loadProducts();
    }

    // splitter
    @ViewChild('splitter', { static: true })
    splitterEl: ElementRef;

    // slider
    public showButtons = true;
    public tickPlacement = 'none';
    public sliderValue = 5;
    public min = 1;
    public max = 90;
    public smallStep = 1;


    // grid
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

    ngAfterViewInit() {
        kendo.jQuery(this.splitterEl.nativeElement).kendoSplitter();
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
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
