import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "select-chart-type-btn-group",
    template: `
    <label>Selected chart type:
        <kendo-buttongroup [selection]="'single'">
            <button #button *ngFor="let chart of data" kendoButton 
                [toggleable]="true" 
                [selected]="isSelected(chart)"
                (selectedChange)="selectedChange($event, chart)">
                {{chart}}
            </button>
        </kendo-buttongroup>
    </label>
  `
})
export class SelectChartTypeBtnGroupComponent {
    @Input() public data: Object[];
    @Input() public chartName: string;
    @Output() public valueChange = new EventEmitter<string>();

    public selectedChange(selected: boolean, chart: string): void {
        if (selected) {
            this.chartName = chart;
            this.valueChange.emit(this.chartName);
        }
    }

    public isSelected(chartName: string): boolean {
        if (this.chartName === chartName) {
            return true;
        } else {
            return false;
        }
    }
}
