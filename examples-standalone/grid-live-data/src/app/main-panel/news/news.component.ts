import { Component } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { newsFeed } from '../transaction-data/news-data';

@Component({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent {
    public newsFeedData: News[] = newsFeed;

    public getNewsImg(newsFeed: News): string {
        return `../../assets/news/${newsFeed.imageSource}.jpg`;
    }
}
