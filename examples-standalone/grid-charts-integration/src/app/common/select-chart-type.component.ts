import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "select-chart-type",
  template: `
    <div style="width: 100%; padding-top: 10px">
      <span>Selected chart type:</span>
      <kendo-dropdownlist
        style="width: 100%"
        [data]="data"
        [value]="chartName"
        (valueChange)="onChange($event)"
      >
      </kendo-dropdownlist>
    </div>
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
