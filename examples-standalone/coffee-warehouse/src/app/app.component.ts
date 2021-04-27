import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '@progress/kendo-angular-l10n';
import { DrawerComponent, DrawerMode, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { CustomMessagesService } from './services/custom-messages.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    public selected: string = 'Dashboard';
    public items: Array<any>;
    public customMsgService: CustomMessagesService;
    public mode: DrawerMode = 'push';
    public mini: boolean = true;

    constructor(private router: Router, public msgService: MessageService) {
        this.router.navigate(['dashboard']);
        this.customMsgService = <CustomMessagesService>this.msgService;
    }

    ngOnInit() {
        this.items = this.drawerItems();
        this.setDrawerConfig();

        this.customMsgService.localeChange.subscribe(() => {
            this.items = this.drawerItems();
        });

        window.addEventListener('resize', () => {
            this.setDrawerConfig();
        });
    }

    ngOnDestroy() {
        window.removeEventListener('resize', () => {});
    }

    public setDrawerConfig() {
        const pageWidth = window.innerWidth;
        if (pageWidth <= 770) {
            this.mode = 'overlay';
            this.mini = false;
        } else {
            this.mode = 'push';
            this.mini = true;
        }
    }

    public drawerItems() {
        return [
            { text: this.customMsgService.translate('dashboard'), icon: 'k-i-grid', selected: true, path: 'dashboard' },
            { text: this.customMsgService.translate('planning'), icon: 'k-i-calendar', path: 'planning' },
            { text: this.customMsgService.translate('profile'), icon: 'k-i-user', path: 'profile' },
            { separator: true },
            { text: this.customMsgService.translate('info'), icon: 'k-i-information', path: 'info' }
        ];
    }

    public toggleDrawer(drawer: DrawerComponent): void {
        drawer.toggle();
    }

    public onSelect(ev: DrawerSelectEvent): void {
        this.router.navigate([ev.item.path]);
        this.selected = ev.item.text;
    }
}
