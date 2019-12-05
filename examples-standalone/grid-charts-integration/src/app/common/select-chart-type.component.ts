import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "select-chart-type",
    template: `

      <label>Selected chart type:
        <kendo-dropdownlist
            style="width: 100%"
            [data]="data"
            [value]="chartName"
            (valueChange)="onChange($event)"
        >
        </kendo-dropdownlist>
      </label>

  `
})
export class SelectChartTypeComponent {
    @Input() public data: Object[];
    @Input() public chartName: string;
    @Output() public valueChange = new EventEmitter<string>();

    public onChange(chartName: string) {
        this.valueChange.emit(chartName);
    }
}
