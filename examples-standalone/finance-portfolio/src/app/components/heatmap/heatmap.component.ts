import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { formatCurrency } from '../../pipes/helpers';
import { StockDataService } from '../../services/stock-data.service';
import { Stock } from '../../models';

declare var kendo: any;

@Component({
    selector: 'app-heatmap',
    templateUrl: './heatmap.component.html',
    styleUrls: ['./heatmap.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeatmapComponent implements AfterViewInit, OnDestroy {
    @ViewChild('heatmap') heatmap: ElementRef | undefined;

    private data: Array<any>;
    private treeData: any;

    private treeMap: any;
    private tooltip: any;

    constructor(public service: StockDataService) {
        this.data = service.getHeatmapStocks();

        const prizeUpItems = this.data
            .filter((item: Stock) => item.change_pct > 0)
            .map((item: Stock) => ({
                symbol: item.symbol,
                name: item.name,
                price: formatCurrency(item.price),
                value: formatCurrency(Number(item.market_cap)),
                change: item.change_pct
            }));

        const prizeDownItems = this.data
            .filter((item: Stock) => item.change_pct < 0)
            .map((item: Stock) => ({
                symbol: item.symbol,
                name: item.name,
                price: formatCurrency(item.price),
                value: formatCurrency(Number(item.market_cap)),
                change: item.change_pct
            }));

        this.treeData = [
            {
                items: [
                    { value: 1, items: prizeDownItems },
                    { value: 2, items: prizeUpItems }
                ]
            }
        ];
    }

    public ngAfterViewInit(): void {
        this.treeMap = kendo
            .jQuery(this.heatmap?.nativeElement)
            .kendoTreeMap({
                dataSource: new kendo.data.HierarchicalDataSource({
                    data: this.treeData,
                    schema: {
                        model: {
                            children: 'items'
                        }
                    }
                }),
                valueField: 'value',
                textField: 'symbol',
                colors: [
                    ['#09E98B', '#00A95B'],
                    ['#FF9693', '#EC0006']
                ],
                template: (item: any) => {
                    return `<div>` + item.dataItem.symbol + `<div>${item.dataItem.change}%</div></div>`;
                }
            })
            .data('kendoTreemap');
        this.tooltip = kendo
            .jQuery(this.heatmap?.nativeElement)
            .kendoTooltip({
                filter: '.k-leaf',
                position: 'center',
                showOn: 'click',
                content: (e: any) => {
                    const treemap = kendo.jQuery(this.heatmap?.nativeElement).data('kendoTreeMap');
                    const item = treemap.dataItem(e.target.closest('.k-treemap-tile'));
                    const cssClass = (value: number): string => {
                        return value > 0 ? 'positive-value' : 'negative-value';
                    };

                    return `
                    <div class="hm-symbol">${item.symbol}</div>
                    <div class="hm-symbol-long-name">${item.name}</div>

                    <div>
                        <span class="mr-2">Price: </span>
                        <span>
                            ${item.price}
                        </span>
                    </div>
                    <div>
                        <span class="mr-2">Change: </span>
                        <span class="${cssClass(item.change)}">
                            ${item.change > 0 ? '+' : ''}${item.change}%
                        <span>
                    </div>
                    <div>
                        <span class="mr-2">Market Cap: </span><span>${item.value}<span>
                    </div>
                `;
                }
            })
            .data('kendoTooltip');
    }

    public ngOnDestroy(): void {
        kendo.destroy(this.treeMap);
        kendo.destroy(this.tooltip);
    }
}
