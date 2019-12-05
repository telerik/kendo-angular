import {
    Component,
    ViewChild,
    ViewEncapsulation
} from "@angular/core";

import { ContextMenuSelectEvent } from '@progress/kendo-angular-menu';
import { Stock, ChartConfig } from "../../model";
import { stocksInPortfolio } from "../../data";

import { ContextMenuComponent } from "@progress/kendo-angular-menu";
import { SelectableSettings, CellClickEvent } from "@progress/kendo-angular-grid";

import { menuItems } from "../../data";
import { getChartStack, getChartType } from '../../utils';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StockListComponent {

    @ViewChild("gridmenu", { static: false }) public gridContextMenu: ContextMenuComponent;
    public items: Object[] = menuItems;
    public opened: boolean = false;
    public chartConfiguration: ChartConfig;

    public gridData: Stock[] = stocksInPortfolio;
    public selectableSettings: SelectableSettings = {
        checkboxOnly: false,
        mode: "multiple"
    };
    public mySelection: Stock[] = stocksInPortfolio.slice(0, 4);

    public onCellClick(e: CellClickEvent): void {
        if (e.type === "contextmenu") {
            const originalEvent = e.originalEvent;
            originalEvent.preventDefault();
            this.gridContextMenu.show({
                left: originalEvent.pageX,
                top: originalEvent.pageY
            });
        }
    }

    public selectBy(e: any) {
        return e.dataItem;
    }

    public onSelectionChange() {
        if (this.opened) {
            setTimeout(() => {
                this.mySelection = [...this.mySelection];
            })
        }
    }

    public onSelect(e: ContextMenuSelectEvent): void {

        this.gridContextMenu.hide();

        this.chartConfiguration = {
            chartName: e.item.text,
            seriesType: getChartType(e.item.text),
            stack: getChartStack(e.item.text)
        }

        if (!this.opened) {
            this.opened = true;
        }
    }

    public close() {
        this.opened = false;
    }

}
