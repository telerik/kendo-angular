import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { bellIcon, gearIcon, questionCircleIcon, homeIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { PageHeaderService } from '../services/page-header.service';

type SupportPage = 'settings' | 'notifications' | 'help' | 'not-found';

@Component({
  selector: 'app-support',
  templateUrl: './support.html',
  styleUrls: ['./support.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink, KENDO_BUTTONS, KENDO_ICONS, KENDO_LAYOUT],
})
export class SupportComponent implements OnInit, OnDestroy {
  public page: SupportPage = 'help';
  public icon: SVGIcon = questionCircleIcon;
  public title = '';
  public subtitle = '';

  constructor(private pageHeaderService: PageHeaderService) {}

  ngOnInit(): void {
    const path = window.location.pathname;
    this.page = path.includes('settings')
      ? 'settings'
      : path.includes('notifications')
        ? 'notifications'
        : path.includes('help')
          ? 'help'
          : 'not-found';
    const details = {
      settings: { title: 'Settings & Preferences', subtitle: 'Manage your clinical workspace preferences', icon: gearIcon },
      notifications: { title: 'Notifications', subtitle: 'Recent updates that need your attention', icon: bellIcon },
      help: { title: 'Help & Support', subtitle: 'Find guidance for your clinical workspace', icon: questionCircleIcon },
      'not-found': { title: 'Page not found', subtitle: 'The requested page is unavailable', icon: homeIcon },
    }[this.page];
    this.title = details.title;
    this.subtitle = details.subtitle;
    this.icon = details.icon;
    this.pageHeaderService.title.set(this.title);
    this.pageHeaderService.subtitle.set(this.subtitle);
  }

  ngOnDestroy(): void {
    this.pageHeaderService.title.set('');
    this.pageHeaderService.subtitle.set('');
  }
}
