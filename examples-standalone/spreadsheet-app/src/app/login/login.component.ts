import { Component, ViewEncapsulation } from "@angular/core";
import { SVGIcon, eyeIcon, loginIcon, microphoneIcon, usersIcon } from "@progress/kendo-svg-icons";
import { InputType, KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: "app-login",
    imports: [
        ReactiveFormsModule,
        KENDO_INPUTS,
        KENDO_LABELS,
        KENDO_BUTTONS,
        KENDO_ICONS,
        RouterLink
    ],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css",
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
    public inputType: InputType = "password";
    public eyeIcon: SVGIcon = eyeIcon;
    public loginIcon: SVGIcon = loginIcon;
    public usersIcon: SVGIcon = usersIcon;
    public microphoneIcon: SVGIcon = microphoneIcon;

    public form: FormGroup = new FormGroup({
        username: new FormControl("Administrator", { nonNullable: true, validators: [Validators.required] }),
        password: new FormControl("MySecretPassword", { nonNullable: true, validators: [Validators.required] }),
    });

    constructor(private router: Router) {}

    public toggleVisibility(): void {
        this.inputType = this.inputType === "password" ? "text" : "password";
    }

    public login(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.router.navigate(["/event-budget"], { queryParams: { role: "Administrator" } });
    }
}
