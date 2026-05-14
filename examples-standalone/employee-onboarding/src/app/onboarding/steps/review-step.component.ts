import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@progress/kendo-angular-buttons';
import { KENDO_CARD } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-review-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, DatePipe, ButtonComponent, ...KENDO_CARD],
  templateUrl: './review-step.component.html'
})
export class ReviewStepComponent {
  readonly form = input.required<FormGroup>();
  readonly editSection = output<number>();

  protected sectionEdit(stepIndex: number): void {
    this.editSection.emit(stepIndex);
  }
}
