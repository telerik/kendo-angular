import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { countries } from 'src/app/resources/countries';
import { FormModel } from 'src/app/models/form.model';

import { SelectEvent, FileRestrictions } from '@progress/kendo-angular-upload';
import { CustomMessagesService } from 'src/app/services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    public formGroup: FormGroup;
    public countries = countries;
    public phoneNumberMask: string = '(+9) 0000-000-00-00';
    public fileRestrictions: FileRestrictions = {
        allowedExtensions: ['.png', '.jpeg', '.jpg']
    };
    public avatars: NodeList;

    public formValue: FormModel | null = {
        avatar: null,
        firstName: 'Peter',
        lastName: 'Douglas',
        email: 'peter.douglas@progress.com',
        phoneNumber: '(+1) 8373-837-93-02',
        directory: true,
        country: 'Bulgaria',
        biography: '',
        team: 'lemon'
    };

    public customMsgService: CustomMessagesService;

    constructor(public router: Router, public msgService: MessageService) {
        this.setFormValues();
        this.customMsgService = <CustomMessagesService>this.msgService;
    }

    ngAfterViewInit() {
        this.setAvatar();
    }

    public setFormValues() {
        const form = localStorage.getItem('form');
        if (form) {
            this.formValue = JSON.parse(form);
        }

        this.formGroup = new FormGroup({
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

    public setAvatar() {
        this.avatars = document.querySelectorAll('.k-avatar .k-avatar-image');
        const avatarImg = localStorage.getItem('avatar');
        if (avatarImg) {
            this.avatars.forEach((avatar: HTMLElement) => {
                avatar.style['background-image'] = `url("${avatarImg}")`;
            });
        }
    }

    public submitForm(): void {
        this.formGroup.markAllAsTouched();
        const formValues = JSON.stringify(this.formGroup.value);
        localStorage.setItem('form', formValues);
    }

    public clearForm(): void {
        this.setFormValues();
    }

    public selectAvatar(ev: SelectEvent): void {
        const avatars = this.avatars;
        let reader = new FileReader();
        const file = ev.files[0];
        if (file.rawFile) {
            reader.onloadend = function () {
                avatars.forEach((avatar: HTMLElement) => {
                    avatar.style['background-image'] = `url("${this.result}")`;
                    localStorage.setItem('avatar', this.result.toString());
                });
            };
            reader.readAsDataURL(file.rawFile);
        }
    }
}
