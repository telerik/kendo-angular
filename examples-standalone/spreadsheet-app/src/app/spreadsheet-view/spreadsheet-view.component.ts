import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  KENDO_SPREADSHEET,
  SheetDescriptor,
  SpreadsheetComponent
} from '@progress/kendo-angular-spreadsheet';
import { ExcelDataService } from '../data/services/excel-data.service';
import { KENDO_NOTIFICATION, NotificationService } from '@progress/kendo-angular-notification';
import { HeaderComponent } from '../header/header.component';
import { KENDO_TOOLBAR } from '@progress/kendo-angular-toolbar';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-spreadsheet-view',
  imports: [
    HeaderComponent,
    KENDO_SPREADSHEET,
    KENDO_TOOLBAR,
    KENDO_BUTTONS,
    KENDO_NOTIFICATION
  ],
  templateUrl: './spreadsheet-view.component.html',
  styleUrl: './spreadsheet-view.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SpreadsheetViewComponent {
  @ViewChild('spreadsheet', { static: false })
  public spreadsheet!: SpreadsheetComponent;
  public data: SheetDescriptor[];
  public isButtonDisabled = true;

  constructor(
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
