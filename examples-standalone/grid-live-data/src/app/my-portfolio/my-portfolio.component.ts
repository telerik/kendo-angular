import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SVGIcon, caretAltDownIcon, caretAltUpIcon } from '@progress/kendo-svg-icons';
import { cards } from './card-data';
import { Stock } from '../../services/stocks.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { Observable } from 'rxjs';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-portfolio',
  imports: [KENDO_ICONS, KENDO_LAYOUT, CommonModule],
  templateUrl: './my-portfolio.component.html',
  styleUrl: './my-portfolio.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MyPortfolioComponent {
    @Input() data!: Observable<Stock[]>;

    public upArrowIcon: SVGIcon = caretAltUpIcon;
    public downArrowIcon: SVGIcon = caretAltDownIcon;

    public cryptoCards: Stock[] = cards;

    constructor(public intl: IntlService) {}

    public getImg(card: any): string {
        return `assets/coinslogo/${card.currency}.png`;
    }

    public getPriceChange(card: Stock): number {
        const  priceChange = (card.currentPrice * card.change_24h/100)/(1 + card.change_24h/100);
        return priceChange;
    }
}
