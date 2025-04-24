import { Component } from '@angular/core';
import { KENDO_PANELBAR } from '@progress/kendo-angular-layout';

@Component({
    selector: 'panelbar-component',
    standalone: true,
    imports: [KENDO_PANELBAR],
    templateUrl: './panelbar.component.html',
    styleUrl: './panelbar.component.css',
})
export class PanelbarComponent {
    public imageUrl(imageName: string): string {
        return `https://demos.telerik.com/kendo-angular-ui/assets/layout/panelbar/${imageName}.jpg`;
    }
}
