import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { countries } from 'src/app/resources/countries';
import { FormModel } from 'src/app/models/form.model';
import { Router } from '@angular/router';
@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    public form: FormGroup;
    public countries = countries;
    public phoneNumberMask: string = '(+9) 0000-000-00-00';

    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
    uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

    public formValue: FormModel | null = {
        avatar: null,
        firstName: 'Peter',
        lastName: 'Douglas',
        email: 'peter.douglas@progress.com',
        phoneNumber: '(+1) 8373-837-93-02',
        directory: true,
        country: 'Bulgaria',
        biography: '',
        team: null
    };

    constructor(public router: Router) {
        this.setFormValues();
    }

    public setFormValues() {
        const form = localStorage.getItem('form');
        if (form) {
            this.formValue = JSON.parse(localStorage.getItem('form'));
        }

        this.form = new FormGroup({
            avatar: new FormControl(),
            firstName: new FormControl(this.formValue.firstName, [Validators.required]),
            lastName: new FormControl(this.formValue.lastName, [Validators.required]),
            email: new FormControl(this.formValue.email, [Validators.required, Validators.email]),
            phoneNumber: new FormControl(this.formValue.phoneNumber, [Validators.required]),
            directory: new FormControl(this.formValue.directory),
            country: new FormControl(this.formValue.country),
            biography: new FormControl(this.formValue.biography),
            team: new FormControl(this.formValue.team)
        });
    }

    public submitForm(): void {
        this.form.markAllAsTouched();
        const formValues = JSON.stringify(this.form.value);
        localStorage.setItem('form', formValues);
    }

    public clearForm(): void {
        this.setFormValues();
    }
}
