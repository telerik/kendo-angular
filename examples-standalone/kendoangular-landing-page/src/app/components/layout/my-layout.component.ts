import { Component } from '@angular/core';
import { DrawerSelectEvent, KENDO_DRAWER } from '@progress/kendo-angular-layout';
import {
    alignJustifyIcon,
    cellsMergeVerticallyIcon,
    colResizeIcon,
    connectorIcon,
    gridIcon,
    imageIcon,
    insertTopIcon,
    layoutIcon,
    listOrderedIcon,
    menuIcon,
    SVGIcon,
    thumbnailsUpIcon,
    userIcon,
} from '@progress/kendo-svg-icons';
import { LayoutComponent } from './child-components/layout/layout.component';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
    selector: 'app-layout',
    imports: [KENDO_DRAWER, KENDO_BUTTONS, LayoutComponent],
    templateUrl: './my-layout.component.html',
    styleUrl: './my-layout.component.css',
})
export class MyLayoutComponent {
    public selected = 'Avatar';
    public layoutSvg: SVGIcon = layoutIcon;

    public items: Array<{ text: string; svgIcon: SVGIcon; selected?: boolean } | { separator: boolean }> = [
        { text: 'Avatar', svgIcon: userIcon, selected: true },
        { separator: true },
        { text: 'Card', svgIcon: imageIcon },
        { separator: true },
        { text: 'ExpansionPanel', svgIcon: insertTopIcon },
        { separator: true },
        { text: 'GridLayout', svgIcon: cellsMergeVerticallyIcon },
        { separator: true },
        { text: 'PanelBar', svgIcon: menuIcon },
        { separator: true },
        { text: 'Splitter', svgIcon: colResizeIcon },
        { separator: true },
        { text: 'StackLayout', svgIcon: alignJustifyIcon },
        { separator: true },
        { text: 'Stepper', svgIcon: listOrderedIcon },
        { separator: true },
        { text: 'TabStrip', svgIcon: thumbnailsUpIcon },
        { separator: true },
        { text: 'TileLayout', svgIcon: gridIcon },
        { separator: true },
        { text: 'Timeline', svgIcon: connectorIcon },
    ];

    public onSelect(ev: DrawerSelectEvent): void {
        this.selected = ev.item.text;
    }
}
