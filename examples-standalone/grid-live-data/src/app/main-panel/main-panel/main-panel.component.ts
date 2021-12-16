import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { Transactions } from 'src/app/models/transaction.model';
import { newsFeed } from './transaction-data/news-data';
import { accountTransactions } from './transaction-data/transactions';


@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPanelComponent implements OnInit {
  public transactionCards: Transactions[] = accountTransactions;
  public newsFeedData: News[] = newsFeed;
  constructor() { }

  ngOnInit(): void {
  }
  public getImg(card: Transactions | null, newsFeed: News | null) {
    if(card !== null)
    return `../../assets/coinslogo/${card.currency}.png`;
    else{
        return `../../assets/news/${newsFeed!.imageSource}.jpg`;
    }
}

}
