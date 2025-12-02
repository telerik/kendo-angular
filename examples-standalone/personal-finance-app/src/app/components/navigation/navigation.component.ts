import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { MessageService } from '@progress/kendo-angular-l10n';
import { DrawerSelectEvent, KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import {
    arrowsSwapIcon,
    chartColumnStackedIcon,
    dollarIcon,
    gearIcon,
    gridIcon,
    menuIcon,
    sparklesIcon,
    SVGIcon,
} from '@progress/kendo-svg-icons';
import { DrawerItem } from '../../models/drawer-item';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { filter } from 'rxjs';

@Component({
    selector: 'app-navigation',
    imports: [RouterModule, KENDO_LAYOUT, KENDO_ICONS, HeaderComponent, FooterComponent],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit {
    public items: DrawerItem[] = [];
    public menuIcon: SVGIcon = menuIcon;
    public expanded: boolean = false;

    public customMsgService: CustomMessagesService;

    private selectedItem: string = '';

    ngOnInit(): void {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            if (event.url === '/') {
                this.selectedItem = '';
            } else {
                this.selectedItem = event.url;
            }
            this.items = this.drawerItems(this.selectedItem);
        });
    }

    constructor(private messages: MessageService, private router: Router) {
        this.customMsgService = this.messages as CustomMessagesService;

        this.items = this.drawerItems(this.selectedItem);

        this.customMsgService.localeChange.subscribe(() => {
            this.items = this.drawerItems(this.selectedItem);
        });
    }

    public onItemSelection(ev: DrawerSelectEvent): void {
        this.selectedItem = ev.item.path;
    }

    public drawerItems(selectedItem: string): DrawerItem[] {
        return [
            {
                separator: true,
            },
            {
                text: this.customMsgService.translate('home'),
                svgIcon: gridIcon,
                path: '',
                selected: selectedItem === '',
            },
            {
                text: this.customMsgService.translate('transactions'),
                svgIcon: arrowsSwapIcon,
                path: '/transactions',
                selected: selectedItem === '/transactions',
            },
            {
                text: this.customMsgService.translate('investments'),
                svgIcon: dollarIcon,
                path: '/investments',
                selected: selectedItem === '/investments',
            },
            {
                text: this.customMsgService.translate('analytics'),
                svgIcon: chartColumnStackedIcon,
                path: '/analytics',
                selected: selectedItem === '/analytics',
            },
            {
                text: this.customMsgService.translate('aiAssistant'),
                svgIcon: sparklesIcon,
                path: '/ai-assistant',
                selected: selectedItem === '/ai-assistant',
            },
            {
                separator: true,
            },
            {
                text: this.customMsgService.translate('settings'),
                svgIcon: gearIcon,
                path: '/settings',
                selected: selectedItem === '/settings',
            },
        ];
    }
}
