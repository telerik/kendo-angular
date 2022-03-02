import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{name}}</h1>

        <kendo-grid [data]="data"></kendo-grid>

        <button kendoButton>Kendo Button</button>
    `
})
export class AppComponent {
    name = 'Angular UMD';
    data = [{
        ProductID: 1,
        ProductName: 'Apples'
    }, {
        ProductID: 2,
        ProductName: 'Pears'
    }];
}
