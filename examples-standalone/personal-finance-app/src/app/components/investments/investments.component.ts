import { Component, HostListener } from '@angular/core';
import { KENDO_CHARTS, SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';
import { MessageService } from '@progress/kendo-angular-l10n';
import { pieData } from '../../data/charts-data';
import { currencyMovers } from '../../data/currency-movers';
import { PieData } from '../../models/charts-models';
import { CurrencyMover } from '../../models/currency-mover';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { CurrencyMoverComponent } from './currency-mover/currency-mover.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';

@Component({
    selector: 'app-investments',
    imports: [KENDO_CHARTS, StockChartComponent, CurrencyMoverComponent],
    templateUrl: './investments.component.html',
})
export class InvestmentsComponent {
    public pieData: PieData[] = pieData;
    public currencyMovers: CurrencyMover[] = currencyMovers;
    public legendPosition: 'top' | 'bottom' | 'left' | 'right' | 'custom' = 'right';

    public customMsgService: CustomMessagesService;

    constructor(private messages: MessageService) {
        this.customMsgService = this.messages as CustomMessagesService;
    }

    public labelContent(args: SeriesLabelsContentArgs): string {
        return `${args.dataItem.value}`;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: UIEvent): void {
        this.updateLegendPosition((event.target as Window).innerWidth);
    }

    private updateLegendPosition(width: number): void {
        this.legendPosition = width < 768 ? 'bottom' : 'right';
    }
}
