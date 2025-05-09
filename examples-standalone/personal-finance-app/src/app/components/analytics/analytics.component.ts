import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AxisLabelContentArgs, DrilldownEvent, KENDO_CHARTS, ValueAxisLabels } from '@progress/kendo-angular-charts';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { MessageService } from '@progress/kendo-angular-l10n';
import {
    bondsMonthlyData,
    bondsYearlyData,
    realEstateMonthlyData,
    realEstateYearlyData,
    stocksMonthlyData,
    stocksYearlyData,
} from '../../data/charts-data';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { TransactionsGridComponent } from '../transactions-grid/transactions-grid.component';
import { MonthlySalesData, YearlySalesData } from '../../models/charts-models';

@Component({
    selector: 'app-analytics',
    standalone: true,
    imports: [TransactionsGridComponent, CommonModule, KENDO_CHARTS, KENDO_DROPDOWNS],
    templateUrl: './analytics.component.html',
})
export class AnalyticsComponent {
    public stocksYearlyData: YearlySalesData[] = stocksYearlyData;
    public realEstateYearlyData: YearlySalesData[] = realEstateYearlyData;
    public bondsYearlyData: YearlySalesData[] = bondsYearlyData;
    public customMsgService: CustomMessagesService;
    public stocksMonthlyData: MonthlySalesData = stocksMonthlyData;
    public realEstateMonthlyData: MonthlySalesData = realEstateMonthlyData;
    public bondsMonthlyData: MonthlySalesData = bondsMonthlyData;
    public legendPosition: 'top' | 'bottom' | 'left' | 'right' | 'custom' = 'top';
    public drilldownLevel: number = 0;
    public isDrilledDown = false;
    public activeSeries: string = '';
    public defaultItem: { text: string; value: number } = {
        text: '',
        value: 0,
    };
    public drillDownLevels: { text: string; value: number }[] = [];

    private disabledItems: string[] = ['Month', 'Mes', 'Monat', 'Mois'];

    constructor(private messages: MessageService) {
        this.customMsgService = this.messages as CustomMessagesService;
        this.categoryAxisLabels = this.categoryAxisLabels.bind(this);

        this.drillDownLevels = this.setDrilldownLevelData();
        this.defaultItem = this.setDefaultItem('year');

        this.customMsgService.localeChange.subscribe(() => {
            this.defaultItem = this.setDefaultItem(this.drilldownLevel === 0 ? 'year' : 'month');
            this.drillDownLevels = this.setDrilldownLevelData();
        });
    }

    public valueAxisLabels: ValueAxisLabels = {
        content: (args) => {
            return '$' + args.value / 1000 + 'k';
        },
    };

    public categoryAxisLabels(args: AxisLabelContentArgs): any {
        if (args.value.length > 3) {
            return this.customMsgService.translate(args.value.toLowerCase()).substring(0, 3);
        }
        return args.value;
    }

    public onDrilldown(event: DrilldownEvent): void {
        this.categoryAxisLabels = this.categoryAxisLabels.bind(this);
        this.isDrilledDown = true;
        this.activeSeries = event.series.name;

        this.defaultItem = this.setDefaultItem('month');
    }

    public onDrilldownLevelChange(event: any): void {
        this.drilldownLevel = event.value;

        if (this.drilldownLevel === 0) {
            this.drilldownLevel = event.value;
            this.isDrilledDown = false;
            this.activeSeries = '';
        }
    }

    public itemDisabled = (itemArgs: { dataItem: any; index: number }) => {
        return this.disabledItems.indexOf(itemArgs.dataItem.text) !== -1;
    };

    @HostListener('window:resize', ['$event'])
    onResize(event: UIEvent): void {
        this.updateLegendPosition((event.target as Window).innerWidth);
    }

    private updateLegendPosition(width: number): void {
        this.legendPosition = width < 768 ? 'bottom' : 'top';
    }

    private setDrilldownLevelData(): { text: string; value: number }[] {
        return [
            { text: this.customMsgService.translate('year'), value: 0 },
            { text: this.customMsgService.translate('month'), value: 1 },
        ];
    }

    private setDefaultItem(currentLevel: string): {
        text: string;
        value: number;
    } {
        if (currentLevel === 'year') {
            return {
                text: this.customMsgService.translate('year'),
                value: 0,
            };
        } else {
            return {
                text: this.customMsgService.translate('month'),
                value: 1,
            };
        }
    }
}
