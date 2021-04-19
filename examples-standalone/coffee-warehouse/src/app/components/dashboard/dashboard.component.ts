import { Component } from '@angular/core';

@Component({
    selector: 'dashboard-component',
    template: `
        <chart-component></chart-component>
        <grid-component></grid-component>
    `
})
export class DashboardComponent {}
