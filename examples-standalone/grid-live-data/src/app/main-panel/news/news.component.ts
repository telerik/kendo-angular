import { Component } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { News } from '../../models/news.model';
import { newsFeed } from '../transaction-data/news-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'news',
  standalone: true,
  imports: [LayoutModule, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
    public newsFeedData: News[] = newsFeed;

    public getNewsImg(newsFeed: News): string {
        return `assets/news/${newsFeed.imageSource}.jpg`;
    }
}
