import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
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
  public demoActionMessage = '';
  private routeSubscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageHeaderService: PageHeaderService,
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.url.subscribe((segments) => {
      const path = segments.map((segment) => segment.path).join('/');
      this.updatePage(path);
    });
  }

  private updatePage(path: string): void {
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
    this.demoActionMessage = '';
    this.pageHeaderService.title.set(this.title);
    this.pageHeaderService.subtitle.set(this.subtitle);
  }

  public showDemoAction(action: string): void {
    this.demoActionMessage = `${action} is a demo action. This preview does not change workspace settings.`;
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.pageHeaderService.title.set('');
    this.pageHeaderService.subtitle.set('');
  }
}
