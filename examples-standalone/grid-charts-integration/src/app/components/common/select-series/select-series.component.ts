import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
    selector: 'select-series',
    imports: [DropDownsModule],
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
