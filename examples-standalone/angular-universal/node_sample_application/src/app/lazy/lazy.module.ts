import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Model {
  product: string;
  sales: number;
}

@Component({
  selector: 'app-lazy-view',
  template: `
    <h3>This is content from a lazy-loaded route</h3>
    <div>Check your Networks tab to see that the js file got loaded</div>
    <br>
    <div><em>/lazy/nested/</em> routes to the same page</div>

    <kendo-chart>
      <kendo-chart-series>
        <kendo-chart-series-item
            type="column" [data]="seriesData"
            field="sales" categoryField="product">
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class LazyComponent {
  public seriesData: Model[] = [{
    product: 'Chai',
    sales: 200
  }, {
    product: 'Others',
    sales: 250
  }];
}

import { ChartsModule } from '@progress/kendo-angular-charts';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full' }
    ]),
    ChartsModule
  ]
})
export class LazyModule {

}
