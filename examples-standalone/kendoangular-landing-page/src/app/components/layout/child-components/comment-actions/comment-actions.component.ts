import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

export interface MyComment {
    likes: number;
    text: string;
}

export interface MyCardComponent {
    thumbnailSrc: string;
    headerTitle: string;
    headerSubtitle: string;
    commentsExpanded: boolean;
    postLiked: boolean;
    comments: Array<MyComment>;
    newCommentTextValue: string;
    postLikes: number;
    scrollViewItems: Array<Record<string, unknown>>;
}

@Component({
    selector: 'comment-actions',
    standalone: true,
    imports: [KENDO_BUTTONS, CommonModule],
    templateUrl: './comment-actions.component.html',
})
export class CommentActionsComponent {
    @Input() public card!: MyCardComponent;

    public commentClick(card: MyCardComponent): void {
        card.commentsExpanded = !card.commentsExpanded;
    }

    public postLikesCount(card: MyCardComponent): void {
        if (card.postLiked) {
            card.postLikes -= 1;
        } else {
            card.postLikes += 1;
        }

        card.postLiked = !card.postLiked;
    }

    public postHeartIcon(card: MyCardComponent): string {
        return card.postLiked ? 'k-icon k-font-icon k-i-heart' : 'k-icon k-font-icon k-i-heart-outline';
    }
}
