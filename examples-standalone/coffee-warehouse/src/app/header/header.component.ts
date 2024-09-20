import { Component, EventEmitter, HostBinding, Inject, Input, LOCALE_ID, Output, QueryList, ViewChildren } from '@angular/core';
import { CldrIntlService, IntlService } from '@progress/kendo-angular-intl';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from '../services/custom-messages.service';
import { SVGIcon, menuIcon, paletteIcon } from '@progress/kendo-svg-icons';
import { locales } from '../resources/locales';
import { NavigationStart, Router } from '@angular/router';
import { ButtonDirective } from '@progress/kendo-angular-buttons';
import { SettingsService } from '../settings.service';

@Component({
    selector: 'app-header-component',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Output() public toggle = new EventEmitter();
    @Input() public selectedPage?: string;

    @ViewChildren(ButtonDirective)
    public kendoHeaderButtons: QueryList<ButtonDirective>;

    public menuIcon: SVGIcon = menuIcon;
    public paletteIcon: SVGIcon = paletteIcon;
    public customMsgService: CustomMessagesService;
    public pauseAnimation = false;

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

    constructor(
        public messages: MessageService,
        @Inject(LOCALE_ID) public localeId: string,
        public intlService: IntlService,
        private router: Router,
        private settingsService: SettingsService
    ) {
        this.localeId = this.selectedLanguage.localeId;
        this.setLocale(this.localeId);

        this.customMsgService = this.messages as CustomMessagesService;
        this.customMsgService.language = this.selectedLanguage.localeId;

        this.settingsService.changes.subscribe(settings => {
            this.pauseAnimation = settings.pauseAnimations;
        });
    }

    ngAfterViewInit() {
        // Update the selected state when the router path changes
        this.router.events.subscribe((route: any) => {
            if (route instanceof NavigationStart) {
                if (route.url === '/') {
                    this.kendoHeaderButtons.get(0).selected = true;
                } else if (route.url === '/profile') {
                    this.kendoHeaderButtons.get(1).selected = true;
                } else if (route.url === '/info') {
                    this.kendoHeaderButtons.get(2).selected = true;
                }
            }
        });
    }

    public changeTheme(theme: { href: string; text: string }) {
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
