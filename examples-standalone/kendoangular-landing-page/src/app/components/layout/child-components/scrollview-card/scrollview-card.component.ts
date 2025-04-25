import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_SCROLLVIEW } from '@progress/kendo-angular-scrollview';
import { CommentActionsComponent, MyCardComponent } from '../comment-actions/comment-actions.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
    selector: 'scrollview-card',
    imports: [KENDO_LAYOUT, KENDO_SCROLLVIEW, CommonModule, CommentActionsComponent, CommentComponent],
    templateUrl: './scrollview-card.component.html',
    styleUrl: './scrollview-card.component.css',
})
export class ScrollviewCardComponent {
    @Input() public card!: MyCardComponent;
}
