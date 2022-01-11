import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { Observable } from 'rxjs';
import { Stock } from '../services/stocks.service';
import { cards } from './cards-data';

@Component({
    selector: 'my-portfolio',
    templateUrl: './my-portfolio.component.html',
    styleUrls: ['./my-portfolio.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MyPortfolioComponent {
    @Input() data!: Observable<Stock[]>;

    public cryptoCards: Stock[] = cards;

    constructor(public intl: IntlService) {}

    public getImg(card: any): string {
        return `../../assets/coinslogo/${card.currency}.png`;
    }
}
