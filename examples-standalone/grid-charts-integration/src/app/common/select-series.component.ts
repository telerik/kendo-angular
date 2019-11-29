import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "select-series",
    template: `
    <div style="width: 100%; padding-top: 10px">
      <span>Selected series:</span>
      <kendo-multiselect
        style="width: 100%"
        [data]="data"
        [valuePrimitive]="true"
        [textField]="'title'"
        [valueField]="'field'"
        [value]="selectedSeries"
        (valueChange)="onChange($event)"
        [placeholder]="'Select the desired series'"
      >
      </kendo-multiselect>
    </div>

  `
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
