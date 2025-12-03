import { Component } from '@angular/core';
import { SVGIcon, bellIcon, fileTxtIcon } from '@progress/kendo-svg-icons';
import { KENDO_NAVIGATION } from "@progress/kendo-angular-navigation";
import { KENDO_TOOLTIPS } from '@progress/kendo-angular-tooltip';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INDICATORS } from '@progress/kendo-angular-indicators';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';

@Component({
  selector: 'header',
  imports: [KENDO_NAVIGATION, KENDO_TOOLTIPS, KENDO_ICONS, KENDO_INDICATORS, KENDO_LAYOUT],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    public kendokaAvatar = 'assets/kendoka-angular.png';

    public fileIcon: SVGIcon = fileTxtIcon;
    public bellIcon: SVGIcon = bellIcon;
}
