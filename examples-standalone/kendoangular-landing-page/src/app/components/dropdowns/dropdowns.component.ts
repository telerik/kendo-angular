import { Component } from '@angular/core';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { employees } from '../../data/employees';
import { Employee } from '../../models/employee';
import { dropdowntreeData } from '../../data/tree-data';

import { TreeItem } from '../../models/tree-item';

@Component({
    selector: 'app-dropdowns',
    imports: [KENDO_DROPDOWNS],
    templateUrl: './dropdowns.component.html',
    styleUrl: './dropdowns.component.css',
})
export class DropdownsComponent {
    public allowCustom = true;
    public selectedValues: string = 'Baseball';
    public comboBoxValue: string = 'Baseball';
    public value: any = ['Baseball', 'Cricket'];
    public dropdowntreeValue: { text: string; id: number } = { text: 'Sofas', id: 3 };
    public employees: Employee[] = employees;
    public furniture: TreeItem[] = dropdowntreeData;
    public expandedNodeIndices: string[] = ['Furniture'];
    public listItems: Array<string> = [
        'Baseball',
        'Basketball',
        'Cricket',
        'Field Hockey',
        'Football',
        'Table Tennis',
        'Tennis',
        'Volleyball',
    ];
}
