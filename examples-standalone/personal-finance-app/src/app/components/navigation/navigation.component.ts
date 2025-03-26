import { Component } from '@angular/core';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { menuIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';
import {
  arrowsSwapIcon,
  chartColumnStackedIcon,
  dollarIcon,
  gearIcon,
  gridIcon,
  sparklesIcon,
} from '@progress/kendo-svg-icons';
import { DrawerItem } from '../../models/drawer-item';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterModule,
    KENDO_LAYOUT,
    KENDO_ICONS,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  public items: DrawerItem[] = [];
  public menuIcon: SVGIcon = menuIcon;
  public expanded: boolean = false;

  public customMsgService: CustomMessagesService;

  constructor(private messages: MessageService) {
    this.customMsgService = this.messages as CustomMessagesService;

    this.items = this.drawerItems();

    this.customMsgService.localeChange.subscribe(() => {
      this.items = this.drawerItems();
    });
  }

  public drawerItems(): DrawerItem[] {
    return [
      {
        separator: true,
      },
      {
        text: this.customMsgService.translate('home'),
        svgIcon: gridIcon,
        path: '',
        selected: true,
      },
      {
        text: this.customMsgService.translate('transactions'),
        svgIcon: arrowsSwapIcon,
        path: '/transactions',
      },
      {
        text: this.customMsgService.translate('investments'),
        svgIcon: dollarIcon,
        path: '/investments',
      },
      {
        text: this.customMsgService.translate('analytics'),
        svgIcon: chartColumnStackedIcon,
        path: '/analytics',
      },
      {
        text: this.customMsgService.translate('aiAssistant'),
        svgIcon: sparklesIcon,
        path: '/ai-assistant',
      },
      {
        separator: true,
      },
      {
        text: this.customMsgService.translate('settings'),
        svgIcon: gearIcon,
        path: '/settings',
      },
    ];
  }
}
