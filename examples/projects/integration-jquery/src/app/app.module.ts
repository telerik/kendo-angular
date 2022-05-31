import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OtherComponent } from './other.component';
import { TestDatePickerComponent } from './test-date-picker.component';
import { TestDiagramComponent } from './test-diagram.component';
import { TestEditorComponent } from './test-editor.component';
import { TestGanttComponent } from './test-gantt.component';
import { TestGridComponent } from './test-grid.component';
import { TestSchedulerComponent } from './test-scheduler.component';
import { TestSliderComponent } from './test-slider.component';
import { TestSplitterComponent } from './test-splitter.component';
import { TestSpreadsheetComponent } from './test-spreadsheet.component';

import '@progress/kendo-ui';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

const appRoutes: Routes = [
  { path: 'other', component: OtherComponent },
  { path: 'k1-date-picker', component: TestDatePickerComponent },
  { path: 'k1-editor', component: TestEditorComponent },
  { path: 'k2-slider', component: TestSliderComponent },
  { path: 'k1-scheduler', component: TestSchedulerComponent },
  { path: 'k1-gantt', component: TestGanttComponent },
  { path: 'k1-diagram', component: TestDiagramComponent },
  { path: 'k2-grid', component: TestGridComponent },
  { path: 'k1-splitter', component: TestSplitterComponent },
  { path: 'k1-spreadsheet', component: TestSpreadsheetComponent },
  { path: '', redirectTo: '/k1-diagram', pathMatch: 'full' },
  { path: '**', component: TestDatePickerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    TestDatePickerComponent,
    TestDiagramComponent,
    TestEditorComponent,
    TestGanttComponent,
    TestGridComponent,
    TestSchedulerComponent,
    TestSliderComponent,
    TestSplitterComponent,
    TestSpreadsheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
