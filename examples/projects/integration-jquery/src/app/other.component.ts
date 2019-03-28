import { Component } from '@angular/core';

@Component({
    selector: 'app-other',
    template: `
        <h1>Other</h1>
        <p>The Kendo UI for jQuery widgets are destroyed when navigating to this component.</p>
    `
})
export class OtherComponent {
    constructor() { }
}
