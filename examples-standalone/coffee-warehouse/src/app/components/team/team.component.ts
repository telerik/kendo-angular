import { Component, OnInit, ViewChild } from '@angular/core';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { MessageService } from '@progress/kendo-angular-l10n';
import { process } from '@progress/kendo-data-query';
import { Employee } from 'src/app/models/employee.model';
import { CustomMessagesService } from 'src/app/services/custom-messages.service';
import { employees } from 'src/app/resources/employees';
import { images } from 'src/app/resources/images';

@Component({
    selector: 'app-team-component',
    templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {
    @ViewChild(DataBindingDirective) dataBinding?: DataBindingDirective;

    public gridData: Employee[] = employees;
    public gridView: any[] = [];

    public mySelection: string[] = [];

    public customMsgService: CustomMessagesService;

    constructor(public msgService: MessageService) {
        this.customMsgService = this.msgService as CustomMessagesService;
    }

    public ngOnInit(): void {
        this.gridView = this.gridData.slice(25, 50);
    }

    // Update Grid collection during changing My Team/All Team
    public onTeamChange(pageSize: number): void {
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

        this.dataBinding? this.dataBinding.skip = 0 : null;
    }

    public getField = (args: Employee) => {
        return `${args.fullName}_${args.jobTitle}_${args.budget}_${args.phone}_${args.address}`;
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
