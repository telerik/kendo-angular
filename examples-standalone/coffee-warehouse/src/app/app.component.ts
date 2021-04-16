import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerComponent, DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    styleUrls: ['./styles.scss'],
    template: `
        <header-component (toggle)="toggleDrawer(drawer)" [selectedPage]="selected"></header-component>
        <kendo-drawer-container>
            <kendo-drawer #drawer [items]="items" mode="push" [mini]="true" [expanded]="true" (select)="onSelect($event)"> </kendo-drawer>
            <kendo-drawer-content>
                <content [selectedItem]="selected"></content>
            </kendo-drawer-content>
        </kendo-drawer-container>
    `
})
export class AppComponent {
    public selected: string = 'Dashboard';

    public toggleDrawer(drawer: DrawerComponent): void {
        drawer.toggle();
    }

    public items: Array<DrawerItem> = [
        { text: 'Dashboard', icon: 'k-i-grid', selected: true },
        { separator: true },
        { text: 'Planning', icon: 'k-i-calendar' },
        { text: 'Profile', icon: 'k-i-user' },
        { separator: true },
        { text: 'Info', icon: 'k-i-information' }
    ];

    public onSelect(ev: DrawerSelectEvent): void {
        this.selected = ev.item.text;
    }
}
