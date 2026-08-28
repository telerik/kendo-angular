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
import { teams } from '../../resources/teams';

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard.component.html',
    imports: [KENDO_CHARTS, KENDO_DATEINPUTS, KENDO_LABELS, KENDO_BUTTONS, KENDO_ICONS, FormsModule, CommonModule]
})
export class DashboardComponent {
    public selectedChart: 'Trend' | 'Volume' = 'Trend';
    public orders: Order[] = orders;
    public calendarIcon: SVGIcon = calendarIcon;
    public readonly teamCount = teams.length;

    public dateRange: any = {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 4, 1)
    };

    public categories = this.orders.map((dataItem) => {
        return dataItem.orderDate;
    });

    public series: any[] = teams.map((team) => ({
        name: team.teamName,
        data: this.fetchData(team.teamID ?? 0),
        color: team.teamColor
    }));

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
            return (series.data = this.fetchData(teams[index].teamID ?? 0));
        });
    }

    public fetchData(team: number): Array<number | undefined> {
        return this.orders.map((dataItem: any) => {
            if (dataItem.teamID === team && dataItem.orderDate >= this.dateRange.start && dataItem.orderDate < this.dateRange.end) {
                return dataItem.orderTotal;
            }
        });
    }

    public get ordersInRange(): Order[] {
        return this.orders.filter(
            (order) => order.orderDate && order.orderDate >= this.dateRange.start && order.orderDate < this.dateRange.end
        );
    }

    public get orderValueInRange(): number {
        return this.ordersInRange.reduce((total, order) => total + (order.orderTotal ?? 0), 0);
    }

    public get averageOrderValue(): number {
        return this.ordersInRange.length ? this.orderValueInRange / this.ordersInRange.length : 0;
    }

    public get activeTeamCount(): number {
        return new Set(this.ordersInRange.map((order) => order.teamID).filter((teamID) => teamID !== undefined)).size;
    }
}
