import { Component } from '@angular/core';
import { SVGIcon, downloadIcon, fileTxtIcon } from '@progress/kendo-svg-icons';

@Component({
    selector: 'app-action-buttons',
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {
    public filteText: SVGIcon = fileTxtIcon;
    public downloadIcon: SVGIcon = downloadIcon;
    public navigateOffSite(webAddress: string): void {
        window.open(webAddress, '_blank');
    }
}
