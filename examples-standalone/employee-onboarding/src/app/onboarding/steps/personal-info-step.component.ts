import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-personal-info-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, KENDO_INPUTS, KENDO_LABELS],
  templateUrl: './personal-info-step.component.html'
})
export class PersonalInfoStepComponent {
  readonly group = input.required<FormGroup>();
}
