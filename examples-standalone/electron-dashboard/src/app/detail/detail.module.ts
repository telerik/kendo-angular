import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';

import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { IntlModule } from "@progress/kendo-angular-intl";


import 'hammerjs';


@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, SharedModule, ChartsModule,IntlModule, DetailRoutingModule]
})
export class DetailModule {}
