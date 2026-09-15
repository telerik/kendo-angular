import { Component, Input } from '@angular/core';
import { MyCardComponent, MyComment } from '../comment-actions/comment-actions.component';
import { KENDO_AVATAR } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { SVGIcon, heartIcon } from '@progress/kendo-svg-icons';

@Component({
    selector: 'post-comment',
    imports: [KENDO_AVATAR, KENDO_BUTTONS, CommonModule, FormsModule],
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

    public commentHeartIcon(_comment: MyComment): SVGIcon {
        return heartIcon;
    }

    public postComment(card: MyCardComponent): void {
        if (card.newCommentTextValue) {
            const comment = { text: card.newCommentTextValue, likes: 0 };
            card.comments.push(comment);
            card.newCommentTextValue = '';
        }
    }
}
