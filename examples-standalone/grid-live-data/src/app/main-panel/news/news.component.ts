import { Component } from '@angular/core';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { News } from '../../models/news.model';
import { newsFeed } from '../transaction-data/news-data';


@Component({
  selector: 'news',
  imports: [KENDO_LAYOUT],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
    public newsFeedData: News[] = newsFeed;

    public getNewsImg(newsFeed: News): string {
        return `assets/news/${newsFeed.imageSource}.jpg`;
    }
}
