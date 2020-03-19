import { Component } from '@angular/core';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
    selector: 'drawer-component',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
    public selected = 'Upload';

    public items: Array<any> = [
        { text: 'Upload', icon: 'k-i-upload', selected: true },
        { separator: true },
        { text: 'Chunk Upload', icon: 'k-i-cut' },
        { separator: true },
        { text: 'File Select', icon: 'k-i-file' }
    ];

    public onSelect(ev: DrawerSelectEvent): void {
        this.selected = ev.item.text;
    }
}
