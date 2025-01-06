import { ChangeDetectorRef, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  SheetDescriptor,
  SpreadsheetComponent,
} from '@progress/kendo-angular-spreadsheet';
import { ExcelDataService } from '../data/services/excel-data.service';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-spreadsheet-view',
  standalone: false,
  templateUrl: './spreadsheet-view.component.html',
  styleUrl: './spreadsheet-view.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SpreadsheetViewComponent {
  @ViewChild('spreadsheet', { static: false })
  public spreadsheet!: SpreadsheetComponent;
  public data: SheetDescriptor[];
  public isButtonDisabled = true;
  public reRender = false;

  constructor(
    private cd: ChangeDetectorRef,
    private notificationService: NotificationService,
    private excelDataService: ExcelDataService
  ) {
    this.data = this.excelDataService.getData();
  }

  public onSave(): void {
    // Save the data to the server
    const data = this.spreadsheet.spreadsheetWidget.toJSON();

    if (data && data.sheets) {
      this.excelDataService.saveData(data.sheets);
      this.notificationService.show({
        content: 'The information is saved.',
        cssClass: 'button-notification',
        hideAfter: 1300,
        animation: { type: 'slide', duration: 400 },
        position: { horizontal: 'center', vertical: 'top' },
        type: { style: 'success', icon: true },
      });
    } else {
      this.notificationService.show({
        content: 'The information is not saved.',
        cssClass: 'button-notification',
        hideAfter: 1300,
        animation: { type: 'slide', duration: 400 },
        position: { horizontal: 'center', vertical: 'top' },
        type: { style: 'error', icon: true },
      });
    }

    this.isButtonDisabled = true;
  }

  public onClear(): void {
    this.data = this.excelDataService.getData().slice();
    this.isButtonDisabled = true;

    this.notificationService.show({
      content: 'The information is cleared.',
      cssClass: 'button-notification',
      hideAfter: 1300,
      animation: { type: 'slide', duration: 400 },
      position: { horizontal: 'center', vertical: 'top' },
      type: { style: 'success', icon: true },
    });
  }
  
  public onChange(): void {
    this.isButtonDisabled = false;
  }
}
