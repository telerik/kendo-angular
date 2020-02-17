import {
    Component,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';

import { ContextMenuSelectEvent } from '@progress/kendo-angular-menu';
import { Stock, ChartConfig } from '../../model';
import { stocksInPortfolio } from '../../data';

import { ContextMenuComponent } from '@progress/kendo-angular-menu';
import { SelectableSettings, CellClickEvent, GridComponent } from '@progress/kendo-angular-grid';

import { menuItems } from '../../data';
import { getChartStack, getChartType } from '../../utils';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StockListComponent {
    @ViewChild('gridmenu') public gridContextMenu: ContextMenuComponent;
    @ViewChild('grid') public grid: GridComponent;

    public items: object[] = menuItems;
    public opened = false;
    public chartConfiguration: ChartConfig;
    public gridData: Stock[] = stocksInPortfolio;
    public selectableSettings: SelectableSettings = {
        checkboxOnly: false,
        mode: 'multiple'
    };
    public mySelection: Stock[] = stocksInPortfolio.slice(0, 4);

    constructor() {
        this.allData = this.allData.bind(this);
    }

    public onCellClick(e: CellClickEvent): void {
        if (e.type === 'contextmenu') {
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
            });
        }
    }

    public onSelect(e: ContextMenuSelectEvent): void {
        if (e.item.text === 'Charts' || e.item.items !== undefined) {
            return;
        }

        if (e.item.text === 'Export Excel') {
            this.grid.saveAsExcel();
        } else {
            this.chartConfiguration = {
                chartName: e.item.text,
                seriesType: getChartType(e.item.text),
                stack: getChartStack(e.item.text)
            };
            if (!this.opened) {
                this.opened = true;
            }
            this.gridContextMenu.hide();
        }
    }

    public allData() {
        const result = {
            data: this.mySelection,
        };
        return result;
    }

    public close() {
        this.opened = false;
    }
}
