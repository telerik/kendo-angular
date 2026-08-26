import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@progress/kendo-angular-buttons';
import { KENDO_CARD, KENDO_EXPANSIONPANEL } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-support',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ButtonComponent, ...KENDO_CARD, ...KENDO_EXPANSIONPANEL],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {}
