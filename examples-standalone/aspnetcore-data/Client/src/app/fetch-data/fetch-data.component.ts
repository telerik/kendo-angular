import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import {
    AddEvent,
    CancelEvent,
    DataStateChangeEvent,
    EditEvent,
    GridComponent,
    RemoveEvent,
    SaveEvent
} from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';

import { DataService } from './data.service';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
    public view!: Observable<any>;
    public formGroup: FormGroup | undefined;
    public state: State = {
        skip: 0,
        take: 5,
        filter: { filters: [], logic: 'or' },
        group: [],
        sort: []
    };
    private editedRowIndex: number | undefined = undefined;

    constructor(private dataService: DataService) {}
    public ngOnInit(): void {
        this.view = this.dataService;
        this.dataService.read();
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.dataService.state = state;
        this.state = state;
        this.dataService.read();
    }

    public addHandler(args: AddEvent): void {
        this.closeEditor(args.sender);

        this.formGroup = new FormGroup({
            blogId: new FormControl(),
            url: new FormControl('')
        });

        args.sender.addRow(this.formGroup);
    }

    public editHandler(args: EditEvent): void {
        this.closeEditor(args.sender);

        this.formGroup = new FormGroup({
            blogId: new FormControl(args.dataItem.blogId),
            url: new FormControl(args.dataItem.url)
        });

        this.editedRowIndex = args.rowIndex;

        args.sender.editRow(args.rowIndex, this.formGroup);
    }

    public cancelHandler(args: CancelEvent): void {
        this.closeEditor(args.sender, args.rowIndex);
    }

    public saveHandler(args: SaveEvent): void {
        const blog: any = args.formGroup.value;
        this.dataService.save(blog, args.isNew);
        args.sender.closeRow(args.rowIndex);
    }

    public removeHandler(args: RemoveEvent): void {
        this.dataService.delete(args.dataItem);
    }

    private closeEditor(grid: GridComponent, rowIndex = this.editedRowIndex): void {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }
}
