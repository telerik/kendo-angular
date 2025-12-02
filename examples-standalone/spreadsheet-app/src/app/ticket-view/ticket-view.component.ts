import { Component, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { KENDO_NOTIFICATION, NotificationService } from "@progress/kendo-angular-notification";
import { ExcelDataService } from "../data/services/excel-data.service";
import { TicketPrices } from "../data/models/interfaces";
import { HeaderComponent } from "../header/header.component";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";

@Component({
    selector: "app-ticket-view",
    imports: [
        HeaderComponent,
        ReactiveFormsModule,
        KENDO_INPUTS,
        KENDO_LABELS,
        KENDO_BUTTONS,
        KENDO_NOTIFICATION
    ],
    templateUrl: "./ticket-view.component.html",
    styleUrls: ["./ticket-view.component.css"],
})
export class TicketViewComponent {
    @ViewChild("notificationTemplate", { read: TemplateRef })
    public notificationTemplate!: TemplateRef<unknown>;
    public formGroup: FormGroup;
    private ticketPrices: TicketPrices = {
        fullPackage: 510,
        workshopFirstDay: 200,
        workshopSecondDay: 250,
        talksOnly: 150,
        onlineTickets: 80,
    };

    constructor(
        private formBuilder: FormBuilder,
        private notificationService: NotificationService,
        private excelDataService: ExcelDataService
    ) {
        this.formGroup = this.formBuilder.group({
            fullPackage: 0,
            workshopFirstDay: 0,
            workshopSecondDay: 0,
            talksOnly: 0,
            onlineTickets: 0,
        });
    }

    public submitForm(): void {
        this.excelDataService.saveTicketData(this.formGroup.value);
        this.notificationService.show({
            content: this.notificationTemplate,
            cssClass: "button-notification",
            hideAfter: 1300,
            animation: { type: "slide", duration: 400 },
            position: { horizontal: "center", vertical: "top" },
            type: { style: "success", icon: true },
        });
    }

    public clearForm(): void {
        this.formGroup.reset({
            fullPackage: 0,
            workshopFirstDay: 0,
            workshopSecondDay: 0,
            talksOnly: 0,
            onlineTickets: 0,
        });
    }

    public calculateTotalPrice(): number {
        const values = this.formGroup.value;
        const totalPrice =
            values["fullPackage"] * this.ticketPrices["fullPackage"] +
            values["workshopFirstDay"] * this.ticketPrices["workshopFirstDay"] +
            values["workshopSecondDay"] * this.ticketPrices["workshopSecondDay"] +
            values["talksOnly"] * this.ticketPrices["talksOnly"] +
            values["onlineTickets"] * this.ticketPrices["onlineTickets"];
        return totalPrice;
    }

    public calculateTicketPrice(ticketType: keyof TicketPrices): string {
        return this.ticketPrices[ticketType].toFixed(2);
    }
}
