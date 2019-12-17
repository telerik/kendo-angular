import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'select-chart-type',
    templateUrl: './select-chart-type.component.html'
})
export class SelectChartTypeComponent {
    @Input() public data: Object[];
    @Input() public chartName: string;
    @Output() public valueChange = new EventEmitter<string>();

    public onChange(chartName: string) {
        this.valueChange.emit(chartName);
    }
}
