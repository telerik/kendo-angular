import { Component } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { MessageService } from '@progress/kendo-angular-l10n';
import { SVGIcon, calendarIcon } from '@progress/kendo-svg-icons';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { Order } from '../../models/order.model';
import { orders } from '../../resources/orders';
import { KENDO_CHARTS } from '@progress/kendo-angular-charts';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard.component.html',
    imports: [KENDO_CHARTS, KENDO_DATEINPUTS, KENDO_LABELS, KENDO_BUTTONS, KENDO_ICONS, FormsModule, CommonModule]
})
export class DashboardComponent {
    public selectedChart: 'Trend' | 'Volume' = 'Trend';
    public orders: Order[] = orders;
    public calendarIcon: SVGIcon = calendarIcon;

    public dateRange: any = {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 4, 1)
    };

    public categories = this.orders.map((dataItem) => {
        return dataItem.orderDate;
    });

    public series: any[] = [
        {
            name: 'Tiger Team',
            data: this.fetchData(1),
            color: '#FF6358'
        },
        {
            name: 'Lemon Team',
            data: this.fetchData(2),
            color: '#F7C62F'
        },
        {
            name: 'Organic Team',
            data: this.fetchData(3),
            color: '#55AB1D'
        },
        {
            name: 'Ocean Team',
            data: this.fetchData(4),
            color: '#28B4C8'
        }
    ];

    public customMsgService: CustomMessagesService;

    constructor(public intl: IntlService, public messages: MessageService) {
        this.customMsgService = this.messages as CustomMessagesService;
    }

    public fromDate(date: Date) {
        this.dateRange.start = date;
        this.updateSeries();
    }

    public toDate(date: Date) {
        this.dateRange.end = date;
        this.updateSeries();
    }

    public updateSeries() {
        this.series.map((series, index) => {
            return (series.data = this.fetchData(index + 1));
        });
    }

    public fetchData(team: number) {
        return this.orders.map((dataItem: any) => {
            if (dataItem.teamID === team && dataItem.orderDate >= this.dateRange.start && dataItem.orderDate < this.dateRange.end) {
                return dataItem.orderTotal;
            }
        });
    }
}
