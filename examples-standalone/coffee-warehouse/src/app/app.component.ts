import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '@progress/kendo-angular-l10n';
import { DrawerComponent, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { CustomMessagesService } from './services/custom-messages.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public selected: string = 'Dashboard';
    public items: Array<any>;
    public customMsgService: CustomMessagesService;

    constructor(private router: Router, public msgService: MessageService) {
        this.router.navigate(['profile']);
        this.customMsgService = <CustomMessagesService>this.msgService;
    }

    ngOnInit() {
        this.items = this.drawerItems();

        this.customMsgService.localeChange.subscribe(() => {
            this.items = this.drawerItems();
        });
    }

    public drawerItems() {
        return [
            { text: this.customMsgService.translate('dashboard'), icon: 'k-i-grid', selected: true, path: 'dashboard' },
            { separator: true },
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
