import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';

@Component({
    selector: 'select-chart-type',
    imports: [KENDO_DROPDOWNS],
    templateUrl: './select-chart-type.component.html'
})
export class SelectChartTypeComponent {
    @Input() public data?: any[];
    @Input() public chartName?: string;
    @Output() public valueChange = new EventEmitter<string>();

    public onChange(chartName: string) {
        this.valueChange.emit(chartName);
    }
}
