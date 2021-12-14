import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { Observable } from 'rxjs';
import { Stock, StocksService } from '../services/stocks.service';

@Component({
    selector: 'my-portfolio',
    templateUrl: './my-portfolio.component.html',
    styleUrls: ['./my-portfolio.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MyPortfolioComponent {
    @Input() data!: Observable<Stock[]>;
    public cryptoCards: any;

    constructor(private stockService: StocksService, public intl: IntlService) {
        this.stockService.getCards().subscribe((data) => {
            this.cryptoCards = data;
        });
    }

    public getImg(card: any) {
        return `../../assets/coinslogo/${card.currency}.png`;
    }
}
