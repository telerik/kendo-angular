import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';

import { DataService } from './data.service';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
    public view: Observable<any>;
    public formGroup: FormGroup;
    public state: State = {
      skip: 0,
      take: 5,
      filter: {filters: [], logic: 'or'},
      group: [],
      sort: []
    };
    private editedRowIndex: number;

    constructor(private dataService: DataService) {

    }
    public ngOnInit(): void {
      this.view = this.dataService;
      this.dataService.read();
      }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.dataService.state = state;
        this.state = state;
        this.dataService.read();
      }

    public addHandler({ sender }) {
      this.closeEditor(sender);

      this.formGroup = new FormGroup({
        'blogId': new FormControl(),
        'url': new FormControl('')
      });

      sender.addRow(this.formGroup);
    }

    public editHandler({ sender, rowIndex, dataItem }) {
      this.closeEditor(sender);

      this.formGroup = new FormGroup({
        'blogId': new FormControl(dataItem.blogId),
        'url': new FormControl(dataItem.url)
      });

      this.editedRowIndex = rowIndex;

      sender.editRow(rowIndex, this.formGroup);
    }

    public cancelHandler({ sender, rowIndex }) {
      this.closeEditor(sender, rowIndex);
    }

    public saveHandler({ sender, rowIndex, formGroup, isNew }) {
      const blog: any = formGroup.value;
      this.dataService.save(blog, isNew);
      sender.closeRow(rowIndex);
    }

    public removeHandler({ dataItem }) {
      this.dataService.delete(dataItem);
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
      grid.closeRow(rowIndex);
      this.editedRowIndex = undefined;
      this.formGroup = undefined;
    }
}
