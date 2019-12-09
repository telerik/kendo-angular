import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "select-series",
	templateUrl: './select-series.component.html'
})
export class SelectSeriesComponent {
    @Input() public data: string[];
    @Output() public valueChange = new EventEmitter<string[]>();

    public selectedSeries: string[] = ['price', 'pe'];

    public onChange(value: string[]): void {
        this.selectedSeries = value;
        this.valueChange.emit(value);
    }
}
