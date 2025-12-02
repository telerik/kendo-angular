import { Component } from '@angular/core';
import { SVGIcon, downloadIcon, fileTxtIcon } from '@progress/kendo-svg-icons';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
    selector: 'app-action-buttons',
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.scss'],
    imports: [KENDO_BUTTONS]
})
export class ActionButtonsComponent {
    public filteText: SVGIcon = fileTxtIcon;
    public downloadIcon: SVGIcon = downloadIcon;
    public navigateOffSite(webAddress: string): void {
        window.open(webAddress, '_blank');
    }
}
