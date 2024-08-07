import { Component } from '@angular/core';
import { GridModule, RowClassArgs } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

import { SVGIcon, caretAltDownIcon, caretAltUpIcon } from '@progress/kendo-svg-icons';
import { Stock, StocksService } from '../../services/stocks.service';
import { IconsModule } from '@progress/kendo-angular-icons';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'grid',
    templateUrl: './grid.component.html',
    standalone: true,
    styleUrls: ['./grid.component.css'],
    imports: [GridModule, IconsModule, HttpClientModule],
    providers: [StocksService],
    animations: [
        trigger('positiveState', [
            transition('void => *', []),
            transition('* => void', []),
            transition('* => *', [
                animate(1500, keyframes([style({ backgroundColor: '#32CD32', offset: 0.0 }), style({ backgroundColor: 'inherit', offset: 1.0 })]))
            ])
        ]),
        trigger('negativeState', [
            transition('void => *', []),
            transition('* => void', []),
            transition('* => *', [
                animate(1500, keyframes([style({ backgroundColor: '#FF0000', offset: 0.0 }), style({ backgroundColor: 'inherit', offset: 1.0 })]))
            ])
        ])
    ]
})
export class GridComponent {
    public gridData: Observable<Stock[]>;
    public prevDataItem!: Stock;

    public downArrowIcon: SVGIcon = caretAltDownIcon;
    public upArrowIcon: SVGIcon = caretAltUpIcon;

    constructor(private stockService: StocksService) {
        this.gridData = this.stockService.getDataObservable();
    }

    public rowCallback = (context: RowClassArgs) => {
        const previousData = this.stockService.previousData;
        const index = previousData.findIndex((item) => item.id === context.dataItem.id);
        this.prevDataItem = previousData[index];

        if (context.dataItem.change_24h > 0) {
            return { 'price-up': true };
        } else {
            return { 'price-down': true };
        }
    };
}
