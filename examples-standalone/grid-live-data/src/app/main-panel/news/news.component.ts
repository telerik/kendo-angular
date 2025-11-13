import { Component } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { News } from '../../models/news.model';
import { newsFeed } from '../transaction-data/news-data';


@Component({
  selector: 'news',
  standalone: true,
  imports: [LayoutModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
    public newsFeedData: News[] = newsFeed;

    public getNewsImg(newsFeed: News): string {
        return `assets/news/${newsFeed.imageSource}.jpg`;
    }
}
