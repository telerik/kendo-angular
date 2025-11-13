import { Component, ViewEncapsulation } from '@angular/core';
import { CategoryAxisLabels, ChartsModule, SeriesLine, ValueAxisLabels } from '@progress/kendo-angular-charts';

@Component({
  selector: 'total-portfolio',
  standalone: true,
  imports: [ChartsModule],
  templateUrl: './total-portfolio.component.html',
  styleUrl: './total-portfolio.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TotalPortfolioComponent {
    public categories: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    public seriesData: Array<number> = [300, 246, 340, 212, 240, 156, 250];
    public lineStyle: SeriesLine = { width: 2, style: 'smooth', color: '#4B5FFA' };
    public categoryAxisLabels: CategoryAxisLabels = {
        font: "12px Roboto, sans-serif",
        color: '#424242'
    };
    public valueAxisLabels: ValueAxisLabels = {
        font: "12px Roboto, sans-serif",
        color: '#424242',
        step: 2
    };
}
