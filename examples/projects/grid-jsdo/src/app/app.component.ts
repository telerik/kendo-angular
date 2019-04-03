import { Component } from '@angular/core';
import { ProgressServiceFactory } from './data/progress-service-factory';
import { DataProviderCustomer } from './data/customer.model';
import { getCustomerConfig } from './data/customer.config';
import { DataStateChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { FormGroup, FormControl } from '@angular/forms';

const createFormGroup: Function = (dataItem: any) => new FormGroup({
  Country: new FormControl(dataItem.Country),
  Name: new FormControl(dataItem.Name),
  Address: new FormControl(dataItem.Address),
  City: new FormControl(dataItem.City),
  State: new FormControl(dataItem.State),
  PostalCode: new FormControl(dataItem.PostalCode),
  Phone: new FormControl(dataItem.Phone),
  CreditLimit: new FormControl(dataItem.CreditLimit),
  Balance: new FormControl(dataItem.Balance),
});

@Component({
  selector: 'app-root',
  template: `
      <kendo-grid
        [pageable]="true"
        [sortable]="true"
        [filterable]="true"
        [data]="view | async"
        [pageSize]="state.take"
        [skip]="state.skip"
        [sort]="state.sort"
        [filter]="state.filter"
        [loading]="view?.pendingData"
        (dataStateChange)="dataStateChange($event)"
        (edit)="editHandler($event)"
        (cancel)="cancelHandler($event)" (save)="saveHandler($event)"
        (remove)="removeHandler($event)" (add)="addHandler($event)">
        <ng-template kendoGridToolbarTemplate>
          <button kendoGridAddCommand><span class="k-icon k-i-add"></span></button>
        </ng-template>
        <kendo-grid-column [field]="'CustNum'" [filter]="'numeric'" [editor]="'numeric'" [title]="'Customer number'"></kendo-grid-column>
        <kendo-grid-column [field]="'Country'"></kendo-grid-column>
        <kendo-grid-column [field]="'Name'"></kendo-grid-column>
        <kendo-grid-column [field]="'Address'"></kendo-grid-column>
        <kendo-grid-column [field]="'City'"></kendo-grid-column>
        <kendo-grid-column [field]="'State'"></kendo-grid-column>
        <kendo-grid-column [field]="'PostalCode'" [title]="'Postal Code'"></kendo-grid-column>
        <kendo-grid-column [field]="'Phone'"></kendo-grid-column>
        <kendo-grid-column [field]="'CreditLimit'" [filter]="'numeric'" [editor]="'numeric'" [title]="'Credit Limit'"></kendo-grid-column>
        <kendo-grid-column [field]="'Balance'" [filterable]="true" [filter]="'numeric'" [editor]="'numeric'"></kendo-grid-column>
        <kendo-grid-command-column [width]="220">
            <ng-template kendoGridCellTemplate>
                <button kendoGridEditCommand><span class="k-icon k-i-edit"></span>Edit</button>
                <button kendoGridSaveCommand><span class="k-icon k-i-checkmark"></span>Save</button>
                <button kendoGridCancelCommand><span class="k-icon k-i-cancel"></span>Cancel</button>
                <button kendoGridRemoveCommand><span class="k-icon k-i-close"></span>Remove</button>
            </ng-template>
        </kendo-grid-command-column>
    </kendo-grid>
  `,
  styles: []
})
export class AppComponent {
  public state: any = {
    skip: 0,
    take: 20,
    filter: {
      logic: 'and',
      filters: []
    }
  };

  public formGroup: FormGroup;
  public dataService;
  public view;
  public editDataModel;
  private editedRowIndex: number;
  private originalItem: any;

  constructor(private progressServiceFactory: ProgressServiceFactory) {
    this.dataService = this.progressServiceFactory.getService<DataProviderCustomer>(
      getCustomerConfig(),
      this.state
    );

    this.view = this.dataService.dataChanges();
  }

  public ngOnInit(): void {
    this.dataService.read();
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.dataService.read(this.state);
  }

  public editHandler(e: any): void {
    const { sender, rowIndex, dataItem } = e;
    this.originalItem = Object.assign({}, dataItem);
    this.editDataModel = dataItem;
    this.formGroup = createFormGroup(this.originalItem);
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }: any): void {
    Object.assign(this.editDataModel, this.originalItem);
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, isNew }: any): void {
    const item: any = Object.assign(this.editDataModel, this.formGroup.value);

    if (isNew) {
        this.dataService.create(item);
    } else {
        this.dataService.update(item);
    }

    sender.closeRow(rowIndex);
  }

  public addHandler(e: any): void {
    const { sender } = e;
    this.editDataModel = this.dataService.createModel();
    this.formGroup = createFormGroup({});
    this.closeEditor(sender);
    sender.addRow(this.formGroup);
  }

  public removeHandler(e: any): void {
    const { dataItem } = e;
    this.dataService.remove(dataItem);
  }

  private closeEditor(grid: GridComponent, rowIndex: number = this.editedRowIndex): void {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
  }
}
