import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';
import { GridModule } from '@progress/kendo-angular-grid';

const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,BrowserAnimationsModule, GridModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {}
