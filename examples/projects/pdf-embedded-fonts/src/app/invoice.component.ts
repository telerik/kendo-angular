import { Component, Input } from '@angular/core';
import { aggregateBy } from '@progress/kendo-data-query';
import { InvoiceRow } from './invoice-row';

@Component({
  selector: 'app-invoice',
  template: `
    <div class="header">
        Blauer See Delikatessen
    </div>

    <div class="address">
      <div class="for">
        <h3>Invoice For</h3>
        <p>
          Antonio Moreno<br /> Naucalpan de Juárez<br /> México D.F., Mexico, 53500
        </p>
      </div>

      <div class="from">
        <h3>From</h3>
        <p>
          Hanna Moos <br /> Lützowplatz 456<br /> Berlin, Germany, 10785
        </p>
      </div>
    </div>

    <div class="items">
      <kendo-grid [data]="data" scrollable="none">
        <kendo-grid-column field="productName" title="Product">
          <ng-template kendoGridFooterTemplate>
            Total
          </ng-template>
        </kendo-grid-column>
        <kendo-grid-column field="unitPrice" format="{0:c}" title="Price" width="120"
                            [style]="rightAlign" [footerStyle]="rightAlign">
        </kendo-grid-column>
        <kendo-grid-column field="qty" title="Pcs." width="120"
                            [style]="rightAlign" [footerStyle]="rightAlign">
          <ng-template kendoGridFooterTemplate let-column="column">
            {{ totals[column.field].sum }}
          </ng-template>
        </kendo-grid-column>
        <kendo-grid-column field="total" format="{0:c}" title="Total" width="120"
                            [style]="rightAlign" [footerStyle]="rightAlign">
          <ng-template kendoGridFooterTemplate let-column="column">
            {{ totals[column.field].sum | kendoNumber:'c' }}
          </ng-template>
        </kendo-grid-column>
      </kendo-grid>
    </div>

    <div class="signature">
      Signature: ________________
    </div>
  `,
  styles: [`
    .header {
      font-size: 30px;
      font-weight: bold;
      margin: 0 0 20px 0;
      border-bottom: 1px solid #e5e5e5;
      color: #3aabf0;
    }

    .address {
        display: flex;
        justify-content: space-between;
        margin: 0 0 20px 0;
    }

    .from p, .for p {
      color: #787878;
    }

    .signature {
      padding-top: 36px;
    }
  `]
})
export class InvoiceComponent {
  @Input()
  public data: InvoiceRow[] = [];

  public rightAlign: any = { 'text-align': 'right' };

  private aggregates: any[] = [{
    field: 'qty', aggregate: 'sum'
  }, {
    field: 'total', aggregate: 'sum'
  }];

  public get totals(): any {
    return aggregateBy(this.data, this.aggregates) || {};
  }
}
