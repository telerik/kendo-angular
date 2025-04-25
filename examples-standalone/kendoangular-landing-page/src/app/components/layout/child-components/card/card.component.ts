import { Component } from '@angular/core';
import { MyCardComponent } from '../comment-actions/comment-actions.component';
import { ScrollviewCardComponent } from '../scrollview-card/scrollview-card.component';

@Component({
    selector: 'card-component',
    imports: [ScrollviewCardComponent],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    public scrollViewCards: MyCardComponent[] = [
        {
            thumbnailSrc: 'https://demos.telerik.com/kendo-angular-ui/assets/layout/card/bg_flag.jpg',
            headerTitle: 'bg_traditions',
            headerSubtitle: 'Bulgaria, Europe',
            commentsExpanded: false,
            postLiked: false,
            comments: [],
            newCommentTextValue: '',
            postLikes: 674,
            scrollViewItems: [
                { url: 'https://demos.telerik.com/kendo-angular-ui/assets/layout/card/kukeri.jpg' },
                { url: 'https://demos.telerik.com/kendo-angular-ui/assets/layout/card/martenitsa.jpg' },
                { url: 'https://demos.telerik.com/kendo-angular-ui/assets/layout/card/rose_festival.jpg' },
            ],
        },
        {
            thumbnailSrc: 'https://demos.telerik.com/kendo-angular-ui/assets/layout/card/rila_lakes.jpg',
            headerTitle: 'bg_mountains',
            headerSubtitle: 'Bulgaria, Europe',
            commentsExpanded: false,
            postLiked: false,
            comments: [],
            newCommentTextValue: '',
            postLikes: 962,
            scrollViewItems: [
                { url: 'https://demos.telerik.com/kendo-angular-ui/assets/layout/card/rila.jpg' },
                { url: 'https://demos.telerik.com/kendo-angular-ui/assets/layout/card/pamporovo.jpg' },
                { url: 'https://demos.telerik.com/kendo-angular-ui/assets/layout/card/camping.jpg' },
            ],
        },
    ];
}
