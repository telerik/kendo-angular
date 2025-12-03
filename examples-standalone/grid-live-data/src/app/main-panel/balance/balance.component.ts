import { Component } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { SVGIcon, caretAltUpIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'balance',
  imports: [KENDO_LAYOUT, KENDO_BUTTONS],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {
    public upArrowIcon: SVGIcon = caretAltUpIcon;
}
