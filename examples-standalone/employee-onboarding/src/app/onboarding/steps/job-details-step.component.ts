import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { KENDO_DATEPICKER } from '@progress/kendo-angular-dateinputs';
import { KENDO_DROPDOWNLIST } from '@progress/kendo-angular-dropdowns';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import {
  DEPARTMENTS,
  EMPLOYMENT_TYPES,
  WORK_MODES
} from '../onboarding-options';

@Component({
  selector: 'app-job-details-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, KENDO_INPUTS, KENDO_LABELS, KENDO_DATEPICKER, KENDO_DROPDOWNLIST],
  templateUrl: './job-details-step.component.html'
})
export class JobDetailsStepComponent {
  readonly group = input.required<FormGroup>();

  readonly departments = [...DEPARTMENTS];
  readonly employmentTypes = [...EMPLOYMENT_TYPES];
  readonly workModes = [...WORK_MODES];
}
