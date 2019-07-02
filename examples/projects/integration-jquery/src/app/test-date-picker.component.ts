import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-test-date-picker',
    template: `
        <h1 #h1Element>
          {{ selectedDate | date }}
        </h1>
        <p>Change the date via the Kendo UI for jQuery DatePicker</p>
        <input #datePicker />
    `
})
export class TestDatePickerComponent implements AfterViewInit, OnDestroy {
    @ViewChild('h1Element', { static: true }) el: ElementRef;
    @ViewChild('datePicker', { static: true }) datePickerEl: ElementRef;

    selectedDate: Date = new Date();

    constructor(private hostEl: ElementRef) {}

    ngAfterViewInit() {
        kendo.jQuery(this.el.nativeElement).css('color', 'red');

        kendo.jQuery(this.datePickerEl.nativeElement).kendoDatePicker({
            change: (e) => {
                this.selectedDate = e.sender.value();
            }
        });
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
    }
}
