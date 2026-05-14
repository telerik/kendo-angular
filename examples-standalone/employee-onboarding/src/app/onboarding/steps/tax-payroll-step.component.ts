import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { KENDO_DROPDOWNLIST } from '@progress/kendo-angular-dropdowns';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-tax-payroll-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, KENDO_INPUTS, KENDO_LABELS, KENDO_DROPDOWNLIST],
  templateUrl: './tax-payroll-step.component.html'
})
export class TaxPayrollStepComponent {
  readonly group = input.required<FormGroup>();

  readonly paymentPreferences = ['Direct deposit', 'Split deposit', 'Other (see HR)'];
}
