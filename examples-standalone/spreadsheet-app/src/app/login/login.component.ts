import { Component, ViewEncapsulation } from "@angular/core";
import { SVGIcon, eyeIcon } from "@progress/kendo-svg-icons";
import { InputType, KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-login",
    imports: [
        ReactiveFormsModule,
        KENDO_INPUTS,
        KENDO_LABELS,
        KENDO_BUTTONS,
        RouterLink
    ],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css",
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
    public inputType: InputType = "password";
    public eyeIcon: SVGIcon = eyeIcon;

    public form: FormGroup = new FormGroup({
        username: new FormControl("Administrator"),
        password: new FormControl("MySecretPassword"),
    });

    public toggleVisibility(): void {
        this.inputType = this.inputType === "password" ? "text" : "password";
    }
}
