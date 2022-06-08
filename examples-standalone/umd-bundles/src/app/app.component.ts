import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{name}}</h1>

        <kendo-grid [data]="data">
            <ng-template kendoGridToolbarTemplate>
                <button type="button" kendoGridExcelCommand icon="file-excel">
                Export to Excel
                </button>
            </ng-template>
            <kendo-grid-excel fileName="Export.xlsx"></kendo-grid-excel>
        </kendo-grid>

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
