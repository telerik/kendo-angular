import { Component } from '@angular/core';
import { SeriesLine } from '@progress/kendo-angular-charts';

@Component({
    selector: 'total-portfolio',
    templateUrl: './total-portfolio.component.html',
    styleUrls: ['./total-portfolio.component.css']
})
export class TotalPortfolioComponent {
    public categories: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    public seriesData: Array<number> = [300, 246, 340, 212, 240, 156, 250];
    public lineStyle: SeriesLine = { width: 2, style: 'smooth', color: '#4B5FFA' };
}
