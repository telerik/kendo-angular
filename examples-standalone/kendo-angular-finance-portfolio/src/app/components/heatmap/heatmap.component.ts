import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { StockDataService } from 'src/app/services/stock-data.service';
import { Stock } from 'src/app/models/stock';

declare var kendo: any;

@Component({
    selector: 'app-heatmap',
    templateUrl: './heatmap.component.html',
    styleUrls: ['./heatmap.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeatmapComponent implements AfterViewInit {

    @ViewChild('heatmap', { static: false }) heatmap: ElementRef;

    private data: Array<Stock>;
    private treeData: any;

    constructor(service: StockDataService) {
        this.data = service.getAllStocks();

        const prizeUpItems = this.data
            .filter((item) => item.change_pct > 0)
            .map((item) => ({ name: item.symbol, value: item.market_cap, change: item.change_pct }));

        const prizeDownItems = this.data
            .filter((item) => item.change_pct < 0)
            .map((item) => ({ name: item.symbol, value: item.market_cap, change: item.change_pct }));

        this.treeData = [
            {
                items: [
                    { value: 2, items: prizeUpItems, color: '#D9534F' },
                    { value: 3, items: prizeDownItems, color: '#5CB85C'}
                ]
            }
        ];
    }

    public ngAfterViewInit(): void {
        kendo.jQuery(this.heatmap.nativeElement).kendoTreeMap({
            dataSource: new kendo.data.HierarchicalDataSource({
                data: this.treeData,
                schema: {
                    model: {
                        children: 'items'
                    }
                }
            }),
            valueField: 'value',
            textField: 'name',
            colors: [['#ff0000', '#ff6666'], ['#006400', '#cccccc']],
            template: ({ dataItem }) => {
                return `<div>`
                + dataItem.name + `<div title="${dataItem.name + ' ' + dataItem.change}%">${ dataItem.change }%</div></div>`;
            }
        });
    }

}
