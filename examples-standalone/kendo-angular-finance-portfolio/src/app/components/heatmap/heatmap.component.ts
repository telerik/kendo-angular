import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { StockDataService } from 'src/app/services/stock-data.service';
import { Stock } from 'src/app/models/stock';

declare var kendo: any;

@Component({
    selector: 'app-heatmap',
    templateUrl: './heatmap.component.html',
    styleUrls: ['./heatmap.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeatmapComponent implements AfterViewInit, OnDestroy {

    @ViewChild('heatmap', { static: false }) heatmap: ElementRef;

    private data: Array<Stock>;
    private treeData: any;

    private treeMap: any;
    private tooltip: any;

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
                    { value: 1, items: prizeUpItems },
                    { value: 2, items: prizeDownItems }
                ]
            }
        ];
    }

    public ngAfterViewInit(): void {
        this.treeMap = kendo.jQuery(this.heatmap.nativeElement).kendoTreeMap({
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
            colors: [['#FF9693', '#EC0006'], ['#09E98B', '#00A95B']],
            template: ({ dataItem }) => {
                return `<div>`
                + dataItem.name + `<div>${ dataItem.change }%</div></div>`;
            }
        }).data('kendoTreemap');
        this.tooltip = kendo.jQuery(this.heatmap.nativeElement).kendoTooltip({
            filter: '.k-leaf',
            position: 'center',
            content: (e: any) => {
                const treemap = kendo.jQuery(this.heatmap.nativeElement).data('kendoTreeMap');
                const item = treemap.dataItem(e.target.closest('.k-treemap-tile'));
                return item.name + ': ' + item.value;
            }
          }).data('kendoTooltip');
    }

    public ngOnDestroy(): void {
        kendo.destroy(this.treeMap);
        kendo.destroy(this.tooltip);
    }

}
