import { Component } from '@angular/core';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from '@progress/kendo-angular-icons';
import { SVGIcon, downloadIcon, fileTxtIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [ButtonsModule, IconsModule],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.scss'
})
export class ActionButtonsComponent {
    public iconDownload: SVGIcon = downloadIcon;
    public iconFileTxt: SVGIcon = fileTxtIcon;
}
