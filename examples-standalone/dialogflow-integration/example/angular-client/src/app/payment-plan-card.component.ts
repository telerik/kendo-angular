import { Component, Input, HostBinding } from '@angular/core';
import { Attachment } from '@progress/kendo-angular-conversational-ui';

@Component({
  selector: 'payment-plan-card',
  template: `
    <table class="k-card-body table">
      <tr *ngFor="let row of plan.rows">
        <th>{{ row.text }}</th>
        <td>{{ row.value | currency:'USD':'symbol' }}</td>
      </tr>
    </table>
  `
})
export class PaymentPlanCardComponent {
  @Input()
  public plan: any;

  @HostBinding('class.k-card')
  public cssClass = true;
}
