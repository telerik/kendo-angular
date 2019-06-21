import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EditService } from './edit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public formGroup: FormGroup;
  private editedRowIndex: number;
  public view: Observable<any>;

  constructor(public editService: EditService) {
    this.view = this.editService.get();
  }

  public addHandler({sender}) {
      this.closeEditor(sender);

      this.formGroup = new FormGroup({
          'ProductID': new FormControl(),
          'ProductName': new FormControl('', Validators.required),
          'UnitPrice': new FormControl(0),
          'UnitsInStock': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
          'Discontinued': new FormControl(false)
      });

      sender.addRow(this.formGroup);
  }

  public editHandler({sender, rowIndex, dataItem}) {
      this.closeEditor(sender);

      this.formGroup = new FormGroup({
          'ProductID': new FormControl(dataItem.ProductID),
          'ProductName': new FormControl(dataItem.ProductName, Validators.required),
          'UnitPrice': new FormControl(dataItem.UnitPrice),
          'UnitsInStock': new FormControl(
                  dataItem.UnitsInStock,
                  Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
          'Discontinued': new FormControl(dataItem.Discontinued)
      });

      this.editedRowIndex = rowIndex;

      sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({sender, rowIndex}) {
      this.closeEditor(sender, rowIndex);
  }

  public saveHandler({sender, rowIndex, formGroup, isNew, dataItem}) {
      const product = formGroup.value;
      product.key = dataItem.key;

      this.editService.save(product, isNew);

      sender.closeRow(rowIndex);
  }

  public removeHandler({dataItem}) {
      this.editService.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
      grid.closeRow(rowIndex);
      this.editedRowIndex = undefined;
      this.formGroup = undefined;
  }

  public resetData() {
    this.editService.resetData();
  }
}
