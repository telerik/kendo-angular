import { Component, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "@progress/kendo-angular-notification";
import { ExcelDataService } from "../data/services/excel-data.service";

@Component({
    selector: "app-speaker-view",
    standalone: false,
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
