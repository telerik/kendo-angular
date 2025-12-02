import { Component, OnInit, Input } from '@angular/core';
import { SVGIcon, starIcon, starOutlineIcon } from '@progress/kendo-svg-icons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-kendo-rating',
    template: ` @for (item of stars; track item) {<kendo-svgicon [icon]="starIcon" [ngClass]="{'yellow': item<=value}"></kendo-svgicon>} `,
    styles: [
        `
            .yellow {
                color: #ffa600;
            }
        `
    ],
    imports: [KENDO_ICONS, NgClass]
})
export class RatingComponent implements OnInit {
    @Input() public value: number = 0;
    @Input() public max?: number;

    public starIcon:SVGIcon = starIcon ;

    public stars: number[] = [];

    public ngOnInit(): void {
        this.stars = new Array(this.max).fill(1).map((item, index) => item + index);
    }


}
