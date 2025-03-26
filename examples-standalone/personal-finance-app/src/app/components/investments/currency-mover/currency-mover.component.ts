import { Component, Input } from '@angular/core';
import { CurrencyMover } from '../../../models/currency-mover';
import { KENDO_ICONS, SVGIcon } from '@progress/kendo-angular-icons';
import { caretAltDownIcon, caretAltUpIcon } from '@progress/kendo-svg-icons';
import { CommonModule } from '@angular/common';
import { IntlService, NumberFormatOptions } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-currency-mover',
  standalone: true,
  imports: [CommonModule, KENDO_ICONS],
  templateUrl: './currency-mover.component.html',
  styleUrl: './currency-mover.component.css',
})
export class CurrencyMoverComponent {
  @Input() currencyMover!: CurrencyMover;

  constructor(public intl: IntlService) {}

  public downIcon: SVGIcon = caretAltDownIcon;
  public upIcon: SVGIcon = caretAltUpIcon;
  public customCurrencyOptions: NumberFormatOptions = {
    style: 'accounting',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
  };

  public getAbsoluteValue(value: number): number {
    return Math.abs(value);
  }
}
