import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output } from '@angular/core';
import { CldrIntlService, IntlService } from '@progress/kendo-angular-intl';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from '../services/custom-messages.service';
import { SVGIcon, menuIcon, paletteIcon } from '@progress/kendo-svg-icons';
import { locales } from '../resources/locales';
import { profileBase64 } from '../resources/profile-base64';
import { ProfileImageService } from '../services/profile-image.service';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header-component',
    templateUrl: './header.commponent.html',
    imports: [KENDO_BUTTONS, KENDO_ICONS, KENDO_DROPDOWNS, KENDO_LAYOUT, CommonModule]
})
export class HeaderComponent {
    @Output() public toggle = new EventEmitter();
    @Input() public selectedPage?: string;

    public menuIcon: SVGIcon = menuIcon;
    public paletteIcon: SVGIcon = paletteIcon;
    public customMsgService: CustomMessagesService;

    public selectedLanguage = { locale: 'English', localeId: 'en-US' };
    public locales = locales;
    public popupSettings = { width: '150' };
    public themes: { href: string; text: string }[] = [
        {
            href: 'assets/kendo-theme-default/dist/all.css',
            text: 'Default'
        },
        {
            href: 'assets/kendo-theme-bootstrap/dist/all.css',
            text: 'Bootstrap'
        },
        {
            href: 'assets/kendo-theme-material/dist/all.css',
            text: 'Material'
        }
    ];
    public selectedTheme = this.themes[0];
    public profileImage: string = '';

    constructor(
        public messages: MessageService,
        @Inject(LOCALE_ID) public localeId: string,
        public intlService: IntlService,
        private profileService: ProfileImageService
    ) {
        this.setProfileImage();

        this.localeId = this.selectedLanguage.localeId;
        this.setLocale(this.localeId);

        this.customMsgService = this.messages as CustomMessagesService;
        this.customMsgService.language = this.selectedLanguage.localeId;

        // Initialize theme link element
        this.initializeTheme();
    }

    private initializeTheme(): void {
        let themeEl = document.getElementById('theme') as HTMLLinkElement;
        if (!themeEl) {
            themeEl = document.createElement('link');
            themeEl.id = 'theme';
            themeEl.rel = 'stylesheet';
            themeEl.href = this.selectedTheme.href;
            document.head.appendChild(themeEl);
        }
    }

    public setProfileImage(): void {
        this.profileService.profileImage$.subscribe((image: string) => {
            this.profileImage = image;
        });
    }

    public changeTheme(theme: { href: string; text: string }): void {
        this.selectedTheme = theme;
        const themeEl: any = document.getElementById('theme');
        themeEl.href = theme.href;
    }

    public changeLanguage(item: any): void {
        this.customMsgService.language = item.localeId;
        this.setLocale(item.localeId);
    }

    public setLocale(locale: any): void {
        (this.intlService as CldrIntlService).localeId = locale;
    }

    public onButtonClick(): void {
        this.toggle.emit();
    }
}
