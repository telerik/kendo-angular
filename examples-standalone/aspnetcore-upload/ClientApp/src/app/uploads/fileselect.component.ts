import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'fileselect-component',
    template: `
        <div class="row">
            <div class="info">
                <p>
                    The FileSelect helps users select single or multiple files from their file systems.
                </p>
                <p>
                    It is a richer version of an <code><![CDATA[<input type="file" />]]></code> element and supports model binding,
                    templates, forms and more.
                </p>
                <p>
                    For more information check the
                    <a href="https://www.telerik.com/kendo-angular-ui/components/uploads/fileselect/">FileSelect documentation.</a>
                </p>
            </div>
            <div class="component info">
                <div class="example-config">
                    <p>Valid: {{ myForm.valid }}</p>
                    <p>Submitted: {{ submitted }}</p>
                </div>
                <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)" class="my-form">
                    <label class="form-label">Username:</label>
                    <input type="text" formControlName="username" class="k-textbox" style="width: 100%" />
                    <p class="form-hint" [hidden]="myForm.controls.username.valid || (myForm.controls.username.pristine && !submitted)">
                        Username is required and should be minimum 4 characters.
                    </p>
                    <label class="form-label">Avatar:</label>

                    <kendo-fileselect
                        formControlName="avatar"
                        [multiple]="false"
                    >
                    </kendo-fileselect>

                    <p class="form-hint" [hidden]="myForm.controls.avatar.valid || (myForm.controls.avatar.pristine && !submitted)">
                        Avatar is required.
                    </p>
                    <button type="submit" class="k-button k-primary" style="margin: 1em 0;">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    `,
    styleUrls: ['./form.css', './content.css']
})
export class FileSelectComponent {
    public myForm: FormGroup;
    public myFiles: Array<any>;
    public submitted = false;
    public userName: string;

    constructor(private fb: FormBuilder, private http: HttpClient) {

        this.myForm = this.fb.group({
            username: [this.userName, [Validators.required, Validators.minLength(4)]],
            avatar: [this.myFiles, [Validators.required]]
        });
    }

    save(_value: any, valid: boolean) {
        this.submitted = true;

        if (valid) {
            console.log('Everything is OK!');
            this.http.post(`api/Submit`, _value).subscribe()
        }
    }
}
