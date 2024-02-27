import { Component, Input } from '@angular/core';
import { ChartsModule } from '@progress/kendo-angular-charts';

@Component({
  selector: 'day-chart',
  standalone: true,
  imports: [ChartsModule],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss'
})
export class DayChartComponent {
    @Input() public data: number[] = [];
    @Input() public changePct: number = 0;
}
