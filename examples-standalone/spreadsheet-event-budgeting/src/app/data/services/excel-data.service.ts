import { Injectable } from '@angular/core';

import { spreadSheetJsonData } from '../spreadsheet-data';
import { SheetDescriptor } from '@progress/kendo-angular-spreadsheet';
import { SpeakerProfile, TicketPrices } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExcelDataService {
  private data: any[] = spreadSheetJsonData;

  public getData(): SheetDescriptor[] {
    return this.data;
  }

  public saveTicketData(data: TicketPrices): void {
    this.incrementCellValues(1, 11, 3, data.workshopFirstDay);
    this.incrementCellValues(1, 12, 3, data.workshopSecondDay);
    this.incrementCellValues(1, 13, 3, data.onlineTickets);
    this.incrementCellValues(1, 14, 3, data.fullPackage);
    this.incrementCellValues(1, 18, 3, data.talksOnly);
  }

  public saveSpeakerData(profileForm: SpeakerProfile): void {
    switch (profileForm.speakerType) {
      case 'Talk - Online':
        this.incrementCellValues(0, 14, 3, 1);
        break;
      case 'Workshop - Online':
        this.incrementCellValues(0, 12, 3, 1);
        break;
      case 'Talk - Live Talk':
        this.incrementCellValues(0, 13, 3, 1);
        break;
      default:
        console.log('Invalid Request');
        break;
    }
  }

  public saveData(data: SheetDescriptor[]): void {
    this.data = data;
  }

  public clear(): void {
    this.data = [...spreadSheetJsonData];
  }

  private incrementCellValues(
    sheetNumber: number,
    rowNumber: number,
    cellNumber: number,
    incrementValue: number
  ): void {
    this.data[sheetNumber].rows[rowNumber].cells[cellNumber].value +=
      incrementValue;
  }
}
