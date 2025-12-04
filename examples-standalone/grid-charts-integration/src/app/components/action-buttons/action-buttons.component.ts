import { Component } from '@angular/core';
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { SVGIcon, downloadIcon, fileTxtIcon } from '@progress/kendo-svg-icons';

@Component({
    selector: 'app-action-buttons',
    imports: [KENDO_BUTTONS, KENDO_ICONS],
    templateUrl: './action-buttons.component.html',
    styleUrl: './action-buttons.component.scss'
})
export class ActionButtonsComponent {
    public iconDownload: SVGIcon = downloadIcon;
    public iconFileTxt: SVGIcon = fileTxtIcon;
}
