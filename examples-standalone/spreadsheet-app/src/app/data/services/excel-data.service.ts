import { Injectable } from "@angular/core";

import { spreadSheetJsonData } from "../spreadsheet-data";
import { SheetDescriptor } from "@progress/kendo-angular-spreadsheet";
import { SpeakerProfile, TicketPrices } from "../models/interfaces";

@Injectable({
    providedIn: "root",
})
export class ExcelDataService {
    private data: SheetDescriptor[] = this.cloneData(spreadSheetJsonData);

    public getData(): SheetDescriptor[] {
        return this.cloneData(this.data);
    }

    public saveTicketData(data: TicketPrices): void {
        const ticketCellLocations = [
            { sheetNumber: 1, rowNumber: 11, cellNumber: 3, value: data.workshopFirstDay },
            { sheetNumber: 1, rowNumber: 12, cellNumber: 3, value: data.workshopSecondDay },
            { sheetNumber: 1, rowNumber: 13, cellNumber: 3, value: data.onlineTickets },
            { sheetNumber: 1, rowNumber: 14, cellNumber: 3, value: data.fullPackage },
            { sheetNumber: 1, rowNumber: 18, cellNumber: 3, value: data.talksOnly },
        ];

        this.updateCellValues(ticketCellLocations);
    }

    public saveSpeakerData(profileForm: SpeakerProfile): void {
        let cellLocation;

        switch (profileForm.speakerType) {
            case "Talk - Online":
                cellLocation = { sheetNumber: 0, rowNumber: 14, cellNumber: 4, value: 1 };
                break;
            case "Workshop - Online":
                cellLocation = { sheetNumber: 0, rowNumber: 12, cellNumber: 4, value: 1 };
                break;
            case "Talk - Live Talk":
                cellLocation = { sheetNumber: 0, rowNumber: 13, cellNumber: 4, value: 1 };
                break;
            default:
                console.log("Invalid Request");
                return;
        }

        this.updateCellValues([cellLocation]);
    }

    public saveData(data: SheetDescriptor[]): void {
        this.data = this.cloneData(data);
    }

    public clear(): void {
        this.data = this.cloneData(spreadSheetJsonData);
    }

    private cloneData(data: SheetDescriptor[]): SheetDescriptor[] {
        return structuredClone(data);
    }

    private updateCellValues(
        cellLocations: { sheetNumber: number; rowNumber: number; cellNumber: number; value: number }[]
    ): void {
        cellLocations.forEach((location) => {
            const cell = this.data[location.sheetNumber]?.rows?.[location.rowNumber]?.cells?.[location.cellNumber];

            if (cell) {
                cell.value = (typeof cell.value === "number" ? cell.value : 0) + location.value;
            }
        });
    }
}
