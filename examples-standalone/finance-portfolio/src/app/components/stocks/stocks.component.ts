import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { StockListComponent } from '../stock-list/stock-list.component';
import { StockChartComponent } from '../stock-chart/stock-chart.component';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { BadgeComponent } from '../badge/badge.component';
import { StockDataService } from '../../services/stock-data.service';
import { RealTimeDataComponent } from '../real-time-data/real-time-data.component';

@Component({
    selector: 'app-stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [StockListComponent, StockChartComponent, BadgeComponent, RealTimeDataComponent, KENDO_LAYOUT, KENDO_BUTTONS]
})
export class StocksComponent implements AfterViewInit {
    @ViewChild('portfolioSplitter', { read: ElementRef }) private splitterElement!: ElementRef<HTMLElement>;
    @ViewChild('selectedStockBadge', { read: ElementRef }) private selectedStockBadge!: ElementRef<HTMLElement>;

    constructor(public readonly stockDataService: StockDataService) {}

    public selectedView: 'results' | 'virtualization' = 'results';

    public selectView(view: 'results' | 'virtualization'): void {
        this.selectedView = view;
    }

    public ngAfterViewInit(): void {
        const splitbar = this.splitterElement.nativeElement.querySelector<HTMLElement>('.k-splitbar');

        if (!splitbar) {
            throw new Error('Portfolio splitter bar was not rendered.');
        }

        splitbar.appendChild(this.selectedStockBadge.nativeElement);
    }
}
