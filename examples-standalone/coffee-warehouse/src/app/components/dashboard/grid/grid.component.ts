import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { employees } from '../../../data/employees';
import { images } from '../../../data/images';

@Component({
    selector: 'grid-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls:['./grid.component.scss'],
    templateUrl:'./grid.component.html'
})
export class GridComponent {
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;

    public gridData: any[] = employees;
    public gridView: any[];

    public mySelection: string[] = [];

    public ngOnInit(): void {
        this.gridView = this.gridData.slice(25, 50);
    }

    public onTeamChange(pageSize: number) {
        pageSize === 25
            ? (this.gridView = this.gridData.slice(pageSize, pageSize * 2))
            : (this.gridView = this.gridData.slice(0, pageSize));
    }

    public onFilter(inputValue: string): void {
        this.gridView = process(this.gridData, {
            filter: {
                logic: 'or',
                filters: [
                    {
                        field: 'fullName',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'jobTitle',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'budget',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'phone',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'address',
                        operator: 'contains',
                        value: inputValue
                    }
                ]
            }
        }).data;

        this.dataBinding.skip = 0;
    }

    public photoURL(dataItem: any): string {
        const code: string = dataItem.imgId + dataItem.gender;
        const image: any = images;

        return image[code];
    }

    public flagURL(dataItem: any): string {
        const code: string = dataItem.country;
        const image: any = images;

        return image[code];
    }
}
