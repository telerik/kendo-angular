import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-policies-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, KENDO_INPUTS, KENDO_LABELS],
  templateUrl: './policies-step.component.html'
})
export class PoliciesStepComponent {
  readonly group = input.required<FormGroup>();
}
