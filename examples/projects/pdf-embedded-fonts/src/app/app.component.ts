import { Component } from '@angular/core';
import { InvoiceRow } from './invoice-row';
import { invoiceData } from './invoice-data';

@Component({
  selector: 'app-root',
  template: `
    <div class="example-config">
      <button kendo-button (click)="pdf.saveAs('invoice.pdf')">
        Save As PDF...
      </button>
    </div>

    <kendo-pdf-export #pdf paperSize="A4" margin="2cm">
      <app-invoice [data]="data"></app-invoice>
    </kendo-pdf-export>
  `,
  styles: [`
    @font-face {
      font-family: 'DejaVu Sans';
      src: url('assets/DejaVuSans.ttf') format('truetype');
    }

    kendo-pdf-export {
      font-family: "DejaVu Sans", "Arial", sans-serif;
      font-size: 12px;
    }
  `]
})
export class AppComponent {
  data: InvoiceRow[] = invoiceData;
}
