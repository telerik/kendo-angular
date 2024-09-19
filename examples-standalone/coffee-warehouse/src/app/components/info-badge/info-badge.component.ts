import { Component } from '@angular/core';
import { BadgeAlign } from '@progress/kendo-angular-indicators';
import { SVGIcon, checkIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'kendo-info-badge',
  templateUrl: './info-badge.component.html'
})
export class InfoBadgeComponent {
    public badgeAlign: BadgeAlign = { vertical: "top", horizontal: "end" };
    public checkIcon: SVGIcon = checkIcon;
}
