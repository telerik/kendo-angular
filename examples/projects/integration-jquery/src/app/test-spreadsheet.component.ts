import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-other',
    template: `
        <hr />
        <p>Kendo UI for jQuery Spreadsheet:</p>
        <div #spreadsheet></div>
    `
})
export class TestSpreadsheetComponent implements AfterViewInit, OnDestroy {
    @ViewChild('spreadsheet') spreadsheetEl: ElementRef;

    constructor(private hostEl: ElementRef) {}

    ngAfterViewInit() {
      kendo.jQuery(this.spreadsheetEl.nativeElement).kendoSpreadsheet({
        // Configuration
      });
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
    }
}

