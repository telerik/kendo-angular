import { Component, Input } from '@angular/core';

@Component({
    selector: 'day-chart',
    templateUrl: './day-chart.template.html'
})
export class DayChartComponent {
    @Input() public data: number[] = [];
    @Input() public changePct: number = 0;
}
