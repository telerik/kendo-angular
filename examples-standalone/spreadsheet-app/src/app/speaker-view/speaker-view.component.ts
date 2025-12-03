import { Component, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { KENDO_NOTIFICATION, NotificationService } from "@progress/kendo-angular-notification";
import { ExcelDataService } from "../data/services/excel-data.service";
import { HeaderComponent } from "../header/header.component";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_DROPDOWNS } from "@progress/kendo-angular-dropdowns";

@Component({
    selector: "app-speaker-view",
    imports: [
        HeaderComponent,
        ReactiveFormsModule,
        KENDO_INPUTS,
        KENDO_LABELS,
        KENDO_BUTTONS,
        KENDO_DROPDOWNS,
        KENDO_NOTIFICATION
    ],
    templateUrl: "./speaker-view.component.html",
    styleUrl: "./speaker-view.component.css",
})
export class SpeakerViewComponent {
    @ViewChild("notificationTemplate", { read: TemplateRef })
    public notificationTemplate!: TemplateRef<unknown>;
    public formGroup: FormGroup;

    public speakerType: string[] = ["Talk - Online", "Workshop - Online", "Talk - Live Talk"];
    constructor(
        private formBuilder: FormBuilder,
        private notificationService: NotificationService,
        private excelDataService: ExcelDataService
    ) {
        this.formGroup = this.formBuilder.group({
            firstName: ["John", Validators.required],
            lastName: ["Brown", Validators.required],
            email: ["example@domain.com", [Validators.required, Validators.email]],
            jobTitle: "",
            companyName: "",
            linkedinProfile: "",
            speakerType: "Talk - Online",
            suggestedTopics: "",
            suggestedDescription: "",
        });
    }

    public submitForm(): void {
        this.excelDataService.saveSpeakerData(this.formGroup.value);
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
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            companyName: "",
            linkedinProfile: "",
            speakerType: 1,
            suggestedTopics: "",
            suggestedDescription: "",
        });
    }
}
