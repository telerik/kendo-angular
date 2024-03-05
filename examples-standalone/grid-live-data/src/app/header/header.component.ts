import { Component } from '@angular/core';
import { SVGIcon, bellIcon, fileTxtIcon } from '@progress/kendo-svg-icons';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { LayoutModule } from '@progress/kendo-angular-layout';

@Component({
  selector: 'header',
  standalone: true,
  imports: [NavigationModule, TooltipsModule, IconsModule, IndicatorsModule, LayoutModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';

    public fileIcon: SVGIcon = fileTxtIcon;
    public bellIcon: SVGIcon = bellIcon;
}
