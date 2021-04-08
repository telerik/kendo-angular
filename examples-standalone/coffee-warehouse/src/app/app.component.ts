import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerComponent, DrawerItem, DrawerMode, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    styleUrls: ['./styles.scss'],
    template: `
        <header-component (toggle)="toggleDrawer(drawer)" [selectedPage]="selected"></header-component>
        <kendo-drawer-container>
            <kendo-drawer #drawer [items]="items" mode="push" [mini]="true" [expanded]="false" (select)="onSelect($event)"> </kendo-drawer>
            <kendo-drawer-content>
                <my-content [selectedItem]="selected"></my-content>
            </kendo-drawer-content>
        </kendo-drawer-container>
    `
})
export class AppComponent {
    public selected = 'Dashboard';

    toggleDrawer(drawer: DrawerComponent) {
        drawer.toggle();
    }

    public items: Array<DrawerItem> = [
        { text: 'Dashboard', icon: 'k-i-home', selected: true },
        { separator: true },
        { text: 'Planning', icon: 'k-i-calendar' },
        { text: 'Profile', icon: 'k-i-user' },
        { separator: true },
        { text: 'Info', icon: 'k-i-info' }
    ];

    public onSelect(ev: DrawerSelectEvent): void {
        this.selected = ev.item.text;
    }
}
