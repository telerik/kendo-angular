import { Component } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SVGIcon, caretAltUpIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'balance',
  standalone: true,
  imports: [LayoutModule, ButtonsModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {
    public upArrowIcon: SVGIcon = caretAltUpIcon;
}
