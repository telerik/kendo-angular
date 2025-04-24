import { Component } from '@angular/core';
import { KENDO_TABSTRIP, SelectEvent } from '@progress/kendo-angular-layout';

@Component({
    selector: 'tabstrip-component',
    standalone: true,
    imports: [KENDO_TABSTRIP],
    templateUrl: './tabstrip.component.html',
    styleUrl: './tabstrip.component.css',
})
export class TabstripComponent {
    public onTabSelect(e: SelectEvent): void {
        console.log(e);
    }
}
