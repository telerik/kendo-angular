import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    styleUrls: ['./app.component.scss'],
    template: `
      <app-header></app-header>

      <main class="container-fluid px-0">
        <div class="container">
          <app-stock-list></app-stock-list>

          <div class="redirect-buttons">
              <a href="https://github.com/telerik/kendo-angular" target="_blank" role="button"><span class="k-icon k-i-download"></span>Download on Github</a>
              <a href="https://www.telerik.com/kendo-angular-ui/components/grid/" target="_blank" role="button"><span class="k-icon k-i-file-txt"></span>Documentation</a>
          </div>
        </div>
      </main>

      <app-footer></app-footer>
    `
})
export class AppComponent {}
