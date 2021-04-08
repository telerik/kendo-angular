import { Component } from "@angular/core";

@Component({
  selector: "dashboard-component",
  template: `
    <div class="dashboard-page main-content">
      <chart-component></chart-component>
      <grid-component></grid-component>
    </div>
  `,
})
export class DashboardComponent {}
