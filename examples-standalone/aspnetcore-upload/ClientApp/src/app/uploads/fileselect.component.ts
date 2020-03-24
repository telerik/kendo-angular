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
                    <label class="form-label">Avatar:</label>

                    <kendo-fileselect formControlName="avatar">
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

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.myForm = this.fb.group({
            avatar: [this.myFiles, [Validators.required]]
        });
    }

    save(value: any, valid: boolean) {
        this.submitted = true;

        if (valid) {
            const formData = new FormData();
            value.avatar.forEach(file => {
                formData.append('files', file);
            });

            this.http.post(`api/Submit`, formData).subscribe(() => {
                console.log('Everything is OK!');
            }),
                err => {
                    console.log(err);
                };
        }
    }
}
