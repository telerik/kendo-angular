import { Component, Input, HostBinding } from '@angular/core';
import { Attachment } from '@progress/kendo-angular-conversational-ui';

@Component({
  selector: 'quote-card',
  template: `
    <div class="k-card-body">
        <dl class="row">
          <dt class="col-sm-5">Type:</dt>
          <dd class="col-sm-7">{{ quote.coverage }}</dd>

          <dt class="col-sm-5">Car Model:</dt>
          <dd class="col-sm-7">{{ quote.make }} {{ quote.model }}</dd>

          <dt class="col-sm-5">Car Cost:</dt>
          <dd class="col-sm-7">{{ quote.worth | currency:'USD':'symbol' }}</dd>

          <dt class="col-sm-5">Start Date:</dt>
          <dd class="col-sm-7">{{ quote.startDate }}</dd>
        </dl>
        <div class="k-hr"></div>
        <dl class="row">
          <dt class="col-sm-5"><h4>Total:</h4><dt>
          <dd class="col-sm-7"><h4>{{ quote.premium | currency:'USD':'symbol' }}</h4></dd>
        </dl>
      </div>
    `
})
export class QuoteCardComponent {
  @Input()
  public quote: any;

  @HostBinding('class.k-card')
  public cssClass = true;
}
