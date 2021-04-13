import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { MessageService } from '@progress/kendo-angular-l10n';
import { process } from '@progress/kendo-data-query';
import { CustomMessagesService } from 'src/app/services/custom-messages.service';
import { employees } from '../../../data/employees';
import { images } from '../../../data/images';

@Component({
    selector: 'grid-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./grid.component.scss'],
    templateUrl: './grid.component.html'
})
export class GridComponent {
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;

    public gridData: any[] = employees;
    public gridView: any[];

    public mySelection: string[] = [];

    public customMsgService: CustomMessagesService;

    constructor(public msgService: MessageService) {
        this.customMsgService = <CustomMessagesService>this.msgService;
    }

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
                        field: this.getField,
                        operator: 'contains',
                        value: inputValue
                    }
                ]
            }
        }).data;

        this.dataBinding.skip = 0;
    }

    public getField = (args) => {
        return `${args.fullName}_${args.jobTitle}_${args.budget}_${args.phone}_${args.address}`;
    };

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
