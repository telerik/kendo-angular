import { AfterViewInit, Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';


import { SelectEvent, FileRestrictions } from '@progress/kendo-angular-upload';
import { MessageService } from '@progress/kendo-angular-l10n';
import { NotificationService } from '@progress/kendo-angular-notification';
import { countries } from '../../resources/countries';
import { FormModel } from '../../models/form.model';
import { CustomMessagesService } from '../../services/custom-messages.service';

@Component({
    selector: 'app-profile-component',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements AfterViewInit {
    public formGroup: FormGroup = new FormGroup({});
    public countries = countries;
    public phoneNumberMask = '(+9) 0000-000-00-00';
    public fileRestrictions: FileRestrictions = {
        allowedExtensions: ['.png', '.jpeg', '.jpg']
    };
    public avatars?: NodeList;

    public formValue: FormModel | null = {
        avatar: [''],
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

    constructor(public msgService: MessageService, private notificationService: NotificationService) {
        this.setFormValues();
        this.customMsgService = this.msgService as CustomMessagesService;
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
            avatar: new FormControl(this.formValue?.avatar, [Validators.required]),
            firstName: new FormControl(this.formValue?.firstName, [Validators.required]),
            lastName: new FormControl(this.formValue?.lastName, [Validators.required]),
            email: new FormControl(this.formValue?.email, [Validators.required, Validators.email]),
            phoneNumber: new FormControl(this.formValue?.phoneNumber, [Validators.required]),
            directory: new FormControl(this.formValue?.directory),
            country: new FormControl(this.formValue?.country),
            biography: new FormControl(this.formValue?.biography),
            team: new FormControl(this.formValue?.team)
        });
    }

    public setAvatar() {
        this.avatars = document.querySelectorAll('.k-avatar .k-avatar-image');
        const avatarImg = localStorage.getItem('avatar');
        if (avatarImg) {
            this.avatars.forEach((avatar: any) => {
                avatar.style['background-image'] = `url("${avatarImg}")`;
            });
        }
    }

    public saveChanges(): void {
        this.formGroup.markAllAsTouched();
        const formValues = JSON.stringify(this.formGroup.value);
        localStorage.setItem('form', formValues);

        this.formGroup.markAsPristine();

        this.notificationService.show({
            content: 'Profile changes have been saved.',
            animation: { type: 'slide', duration: 500 },
            position: { horizontal: 'center', vertical: 'bottom' },
            type: { style: 'success', icon: true },
            hideAfter: 2000
        });
    }

    public cancelChanges(): void {
        this.setFormValues();
    }

    public isFileAllowed(file: any): boolean {
        return <boolean>this.fileRestrictions.allowedExtensions?.includes(file.extension);
    }

    public selectAvatar(ev: SelectEvent): void {

        const avatars = this.avatars;
        const reader = new FileReader();
        const file = ev.files[0];
        if (file.rawFile && this.isFileAllowed(file)) {
            reader.onloadend = function () {
                avatars?.forEach((avatar: any) => {
                    avatar.style['background-image'] = `url("${this.result}")`;
                    localStorage.setItem('avatar', (<string>this.result).toString());
                });
            };
            reader.readAsDataURL(file.rawFile);
        }
    }
}
