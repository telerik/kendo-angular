import { Component } from '@angular/core';
import { KENDO_AVATAR } from '@progress/kendo-angular-layout';
import { SVGIcon, userIcon } from '@progress/kendo-svg-icons';

@Component({
    selector: 'avatar-component',
    standalone: true,
    imports: [KENDO_AVATAR],
    templateUrl: './avatar.component.html',
    styleUrl: './avatar.component.css',
})
export class AvatarComponent {
    public firstContactImage = 'https://demos.telerik.com/kendo-angular-ui/assets/dropdowns/contacts/RICSU.jpg';
    public secondContactImage = 'https://demos.telerik.com/kendo-angular-ui/assets/dropdowns/contacts/GOURL.jpg';
    public userSvg: SVGIcon = userIcon;

    public contactImages: Array<{
        avatar: string;
        name: string;
        position: string;
    }> = [
        {
            avatar: this.firstContactImage,
            name: 'Michael Holz',
            position: 'Manager',
        },
        {
            avatar: this.secondContactImage,
            name: 'André Stewart',
            position: 'Product Manager',
        },
    ];

    public contactInitials: Array<{
        avatar: string;
        name: string;
        position: string;
    }> = [
        { avatar: 'JS', name: 'Jason Smith', position: 'UX Designer' },
        { avatar: 'GP', name: 'George Porter', position: 'Software Engineer' },
    ];
}
