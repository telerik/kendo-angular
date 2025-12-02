import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';

@Component({
    selector: 'select-series',
    imports: [KENDO_DROPDOWNS],
    templateUrl: './select-series.component.html'
})
export class SelectSeriesComponent {
    @Input() public data: object[] = [];
    @Output() public valueChange = new EventEmitter<string[]>();

    public selectedSeries: string[] = ['price', 'pe'];

    public onChange(value: string[]): void {
        this.selectedSeries = value;
        this.valueChange.emit(value);
    }
}
