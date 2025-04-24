import { Component, Input } from '@angular/core';
import { MyCardComponent, MyComment } from '../comment-actions/comment-actions.component';
import { KENDO_AVATAR } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'post-comment',
    standalone: true,
    imports: [KENDO_AVATAR, CommonModule, FormsModule],
    templateUrl: './comment.component.html',
})
export class CommentComponent {
    @Input() public card!: MyCardComponent;

    public commentLikesCount(comment: MyComment): void {
        if (comment.likes > 0) {
            comment.likes -= 1;
        } else {
            comment.likes += 1;
        }
    }

    public commentHeartIcon(comment: MyComment): string {
        if (comment && comment.likes > 0) {
            return 'k-icon k-font-icon k-i-heart';
        } else {
            return 'k-icon k-font-icon k-i-heart-outline';
        }
    }

    public postComment(card: MyCardComponent): void {
        if (card.newCommentTextValue) {
            const comment = { text: card.newCommentTextValue, likes: 0 };
            card.comments.push(comment);
            card.newCommentTextValue = '';
        }
    }
}
