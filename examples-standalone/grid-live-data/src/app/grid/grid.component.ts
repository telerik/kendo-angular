import { Component } from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { Observable } from 'rxjs';
import { catchError, map, of, startWith } from 'rxjs';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

import {
  SVGIcon,
  caretAltDownIcon,
  caretAltUpIcon,
} from '@progress/kendo-svg-icons';
import { Stock, StocksService } from '../../services/stocks.service';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  imports: [KENDO_GRID, KENDO_ICONS, KENDO_LAYOUT, CommonModule],
  animations: [
    trigger('positiveState', [
      transition('void => *', []),
      transition('* => void', []),
      transition('* => *', [
        animate(
          1500,
          keyframes([
            style({ backgroundColor: 'var(--kendo-color-success)', offset: 0.0 }),
            style({ backgroundColor: 'inherit', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
    trigger('negativeState', [
      transition('void => *', []),
      transition('* => void', []),
      transition('* => *', [
        animate(
          1500,
          keyframes([
            style({ backgroundColor: 'var(--kendo-color-error)', offset: 0.0 }),
            style({ backgroundColor: 'inherit', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class GridComponent {
  public gridData: Observable<MarketDataState>;

  public downArrowIcon: SVGIcon = caretAltDownIcon;
  public upArrowIcon: SVGIcon = caretAltUpIcon;

  constructor(private stockService: StocksService) {
    this.gridData = this.stockService.getDataObservable().pipe(
      map((data) => ({ data, loading: false, error: false })),
      startWith({ data: [], loading: true, error: false }),
      catchError(() => of({ data: [], loading: false, error: true }))
    );
  }

  public priceChangedUp(dataItem: Stock): boolean {
    return dataItem.currentPrice > this.previousPrice(dataItem);
  }

  public priceChangedDown(dataItem: Stock): boolean {
    return dataItem.currentPrice < this.previousPrice(dataItem);
  }

  private previousPrice(dataItem: Stock): number {
    return this.stockService.previousData.find((item) => item.id === dataItem.id)?.currentPrice ?? dataItem.currentPrice;
  }
}

interface MarketDataState {
  data: Stock[];
  loading: boolean;
  error: boolean;
}
