import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <kendo-multiselecttree
           [kendoMultiSelectTreeFlatBinding]="data"
           parentIdField="reportsTo"
           valueField="id"
           textField="name"
           class="furniture"
        >
       </kendo-multiselecttree>
    `
})
export class AppComponent {
    public data: any[] = [
        { id: 2, name: 'Andrew Fuller', reportsTo: null },
        { id: 1, name: 'Nancy Davolio', reportsTo: 2 },
        { id: 3, name: 'Janet Leverling', reportsTo: 2 },
        { id: 4, name: 'Margaret Peacock', reportsTo: 2 },
        { id: 5, name: 'Steven Buchanan', reportsTo: 2 },
        { id: 8, name: 'Laura Callahan', reportsTo: 2 },
        { id: 6, name: 'Michael Suyama', reportsTo: 5 },
        { id: 7, name: 'Robert King', reportsTo: 5 },
        { id: 9, name: 'Anne Dodsworth', reportsTo: 5 }
    ];
}
