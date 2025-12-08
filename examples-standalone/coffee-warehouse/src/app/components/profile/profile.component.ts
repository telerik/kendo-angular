import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { SelectEvent, FileRestrictions, KENDO_UPLOADS } from '@progress/kendo-angular-upload';
import { MessageService } from '@progress/kendo-angular-l10n';
import { NotificationService, KENDO_NOTIFICATION } from '@progress/kendo-angular-notification';
import { countries } from '../../resources/countries';
import { FormModel } from '../../models/form.model';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { ProfileImageService } from '../../services/profile-image.service';
import { KENDO_EDITOR } from '@progress/kendo-angular-editor';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_TOOLBAR } from '@progress/kendo-angular-toolbar';

@Component({
    selector: 'app-profile-component',
    templateUrl: './profile.component.html',
    imports: [ReactiveFormsModule, KENDO_UPLOADS, KENDO_NOTIFICATION, KENDO_EDITOR, KENDO_INPUTS, KENDO_LABELS, KENDO_DROPDOWNS, KENDO_BUTTONS, KENDO_LAYOUT, KENDO_TOOLBAR],
    providers: [NotificationService]
})
export class ProfileComponent {
    public formGroup: FormGroup = new FormGroup({});
    public countries = countries;
    public phoneNumberMask = '(+9) 0000-000-00-00';
    public profileImage: string = '';
    public fileRestrictions: FileRestrictions = {
        allowedExtensions: ['.png', '.jpeg', '.jpg']
    };

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

    constructor(
        public msgService: MessageService,
        private notificationService: NotificationService,
        private profileService: ProfileImageService
    ) {
        this.setFormValues();
        this.customMsgService = this.msgService as CustomMessagesService;
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

    public setAvatar(): void {
        const avatarImg = localStorage.getItem('avatar');
        if (avatarImg) {
            this.profileImage = avatarImg;
            this.profileService.updateProfileImage(avatarImg);
        } else {
            this.profileService.profileImage$.subscribe((image: string) => {
                this.profileImage = image;
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
        return <boolean>this.fileRestrictions.allowedExtensions?.includes(file.extension.toLowerCase());
    }

    public selectAvatar(ev: SelectEvent): void {
        const reader = new FileReader();
        const file = ev.files[0];
        if (file.rawFile && this.isFileAllowed(file)) {
            reader.onloadend = () => {
                this.profileImage = reader.result as string;
                this.profileService.updateProfileImage(this.profileImage);
                localStorage.setItem('avatar', this.profileImage);
            };
            reader.readAsDataURL(file.rawFile);
        }
    }
}
