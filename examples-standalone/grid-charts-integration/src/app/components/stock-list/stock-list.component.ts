import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ContextMenuComponent, ContextMenuSelectEvent, MenusModule } from "@progress/kendo-angular-menu";
import { CellClickEvent, ExcelModule, GridComponent, GridModule, SelectableSettings } from "@progress/kendo-angular-grid";
import { IconsModule } from '@progress/kendo-angular-icons';
import { SVGIcon, infoCircleIcon } from '@progress/kendo-svg-icons';
import { ChartConfig, Stock } from '../../model';
import { menuItems, stocksInPortfolio } from '../../data';
import { SeriesType } from '@progress/kendo-angular-charts';
import { getChartStack, getChartType } from '../../utils';
import { NumberFormatPipe } from '../../pipes/number-format.pipe';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { WindowComponent } from '../common/window/window.component';
import { DayChartComponent } from '../charts/day/day.component';

import 'hammerjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [MenusModule, GridModule, IconsModule, NumberFormatPipe, DialogsModule, ExcelModule, WindowComponent, DayChartComponent, WindowComponent, CommonModule],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class StockListComponent {
    @ViewChild('gridmenu') public gridContextMenu: ContextMenuComponent | undefined;
    @ViewChild('grid') public grid: GridComponent | undefined;

    public infoIcon: SVGIcon = infoCircleIcon;

    public items: object[] = menuItems;
    public opened = false;
    public chartConfiguration: ChartConfig = { seriesType: 'line', stack: false };
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
            this.gridContextMenu?.show({
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
            this.grid?.saveAsExcel();
        } else {
            this.chartConfiguration = {
                chartName: e.item.text,
                seriesType: getChartType(e.item.text) as SeriesType,
                stack: getChartStack(e.item.text)
            };
            if (!this.opened) {
                this.opened = true;
            }
            this.gridContextMenu?.hide();
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
