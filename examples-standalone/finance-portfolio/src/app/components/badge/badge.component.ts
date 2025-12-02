import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    standalone: false
})
export class BadgeComponent {
    @Input() public item: any;
}
