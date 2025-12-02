import { Component, Input } from '@angular/core';
import { KENDO_CHARTS } from '@progress/kendo-angular-charts';

@Component({
    selector: 'day-chart',
    imports: [KENDO_CHARTS],
    templateUrl: './day.component.html',
    styleUrl: './day.component.scss'
})
export class DayChartComponent {
    @Input() public data: number[] = [];
    @Input() public changePct: number = 0;
}
