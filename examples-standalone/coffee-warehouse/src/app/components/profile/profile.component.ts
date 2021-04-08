import { Component, ViewEncapsulation } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "profile-component",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./styles.scss"],
  template: `
    <div class="example">
      <form class="k-form" [formGroup]="form">
        <kendo-avatar
          initials="EG"
          width="80px"
          height="80px"
          shape="circle"
        ></kendo-avatar>
        <kendo-upload [saveUrl]="uploadSaveUrl" [removeUrl]="uploadRemoveUrl">
        </kendo-upload>

        <kendo-formfield>
          <kendo-label [for]="firstName" text="Frist Name"></kendo-label>
          <kendo-textbox
            formControlName="firstName"
            [clearButton]="true"
            #firstName
            required
          ></kendo-textbox>
          <kendo-formerror>Error: First Name is required</kendo-formerror>
        </kendo-formfield>

        <kendo-formfield>
          <kendo-label [for]="lastName" text="Last Name"></kendo-label>
          <kendo-textbox
            formControlName="lastName"
            [clearButton]="true"
            #lastName
            required
          ></kendo-textbox>

          <kendo-formerror>Error: Last Name is required</kendo-formerror>
        </kendo-formfield>

        <kendo-formfield>
          <kendo-label [for]="email" text="Email Address"></kendo-label>
          <kendo-textbox
            formControlName="email"
            [clearButton]="true"
            #email
            required
          ></kendo-textbox>

          <kendo-formerror *ngIf="form.controls.email.errors?.required"
            >Error: Email is required</kendo-formerror
          >
          <kendo-formerror *ngIf="form.controls.email.errors?.email"
            >Error: Not valid email format</kendo-formerror
          >
        </kendo-formfield>

        <kendo-formfield>
          <kendo-label [for]="phoneNumber" text="Phone Number"></kendo-label>
          <kendo-maskedtextbox
            #phoneNumber
            formControlName="phoneNumber"
            [mask]="phoneNumberMask"
          ></kendo-maskedtextbox>
          <kendo-formerror>
            <div *ngIf="form.controls.phoneNumber.errors">
              Error: Not a valid phone number format
            </div>
            <div *ngIf="form.controls.phoneNumber.errors?.required">
              Error: Phone number is required
            </div>
          </kendo-formerror>
        </kendo-formfield>

        <kendo-formfield>
          <kendo-label [for]="biography" text="Short Biography"></kendo-label>
          <kendo-editor
            #biography
            formControlName="biography"
            required
          ></kendo-editor>
          <kendo-formerror>
            <div *ngIf="form.controls.biography.errors?.required">
              Biography must be at least 50 characters long.
            </div>
          </kendo-formerror>
        </kendo-formfield>

        <kendo-formfield>
          <kendo-label
            [for]="directory"
            text="Icnlude in public directory"
          ></kendo-label>
          <kendo-switch #directory formControlName="directory"> </kendo-switch>
          <kendo-formerror>Error: This field is required</kendo-formerror>
        </kendo-formfield>
        <kendo-formfield>
          <label class="k-label">Team</label>

          <ul class="k-radio-list k-list-horizontal">
            <li class="k-radio-item">
              <input
                type="radio"
                #tigerTeam
                value="tiger"
                kendoRadioButton
                [formControlName]="'team'"
                checked="true"
              />
              <kendo-label
                class="k-radio-label"
                [for]="tigerTeam"
                text="Tiger Team"
              ></kendo-label>
            </li>

            <li class="k-radio-item">
              <input
                type="radio"
                #lemonTeam
                value="lemon"
                kendoRadioButton
                [formControlName]="'team'"
              />
              <kendo-label
                class="k-radio-label"
                [for]="lemonTeam"
                text="Lemon Team"
              ></kendo-label>
            </li>

            <li class="k-radio-item">
              <input
                type="radio"
                #organicTeam
                value="organic"
                kendoRadioButton
                [formControlName]="'team'"
              />
              <kendo-label
                class="k-radio-label"
                [for]="organicTeam"
                text="Organic Team"
              ></kendo-label>
            </li>
            <li class="k-radio-item">
              <input
                type="radio"
                #oceanTeam
                value="ocean"
                kendoRadioButton
                [formControlName]="'team'"
              />
              <kendo-label
                class="k-radio-label"
                [for]="oceanTeam"
                text="Ocean Team"
              ></kendo-label>
            </li>
          </ul>
        </kendo-formfield>

        <div class="k-form-buttons">
          <button class="k-button" (click)="clearForm()">Cancel</button>
          <button class="k-button k-primary" (click)="submitForm()">
            Send Changes
          </button>
        </div>
      </form>
    </div>
  `
})
export class ProfileComponent {
  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl"; // should represent an actual API endpoint

  public phoneNumberValue: string = "(+1) 8373-837-93-02";
  public phoneNumberMask: string = "(+9) 0000-000-00-00";

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl("Peter", [Validators.required]),
      lastName: new FormControl("Douglas", [Validators.required]),
      email: new FormControl("peter.douglas@progress.com", [
        Validators.required,
        Validators.email
      ]),
      phoneNumber: new FormControl(this.phoneNumberValue, [
        Validators.required
      ]),
      directory: new FormControl(true),
      biography: new FormControl(""),
      team: new FormControl(null)
    });
  }

  public submitForm(): void {
    this.form.markAllAsTouched();
  }

  public clearForm(): void {
    this.form.reset();
  }
}
