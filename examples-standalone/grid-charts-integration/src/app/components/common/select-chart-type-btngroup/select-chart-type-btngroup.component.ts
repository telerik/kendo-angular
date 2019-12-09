import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "select-chart-type-btn-group",
    templateUrl: './select-chart-type-btngroup.component.html'
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
