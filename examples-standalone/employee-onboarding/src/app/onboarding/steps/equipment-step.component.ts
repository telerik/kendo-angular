import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { KENDO_DROPDOWNLIST, KENDO_MULTISELECT } from '@progress/kendo-angular-dropdowns';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { ACCESSORY_OPTIONS, LAPTOP_OPTIONS, SOFTWARE_OPTIONS } from '../onboarding-options';

@Component({
  selector: 'app-equipment-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, KENDO_INPUTS, KENDO_LABELS, KENDO_DROPDOWNLIST, KENDO_MULTISELECT],
  templateUrl: './equipment-step.component.html'
})
export class EquipmentStepComponent {
  readonly group = input.required<FormGroup>();

  readonly laptops = [...LAPTOP_OPTIONS];
  readonly accessories = ACCESSORY_OPTIONS;
  readonly software = SOFTWARE_OPTIONS;
}
