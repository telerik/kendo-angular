import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

const defaulFont = 'defaultFont';
const defaultTheme = 'defaultTheme';

const defaultSettings = {
    textSize: 16,
    colorTheme: defaultTheme,
    font: defaulFont,
    underlineLinks: false,
    pauseAnimations: false,
    lgSizeWidgets: false,
    lineHeight: 1.2,
    letterSpacing: 1
};

@Component({
    selector: 'app-settings-list-component',
    templateUrl: './settings-list.component.html'
})
export class SettingsListComponent {
    public textSize: number = 16;
    public colorTheme = defaultTheme;
    public font = defaulFont;
    public underlineLinks: boolean = false;
    public pauseAnimations: boolean = false;
    public lgSizeWidgets: boolean = false;
    public lineHeight: number = 1.2;
    public letterSpacing: number = 1;

    public settingsExpanded = true;

    public get accessibilitySettings(): any {
        return {
            textSize: this.textSize,
            colorTheme: this.colorTheme,
            font: this.font,
            underlineLinks: this.underlineLinks,
            pauseAnimations: this.pauseAnimations,
            lgSizeWidgets: this.lgSizeWidgets,
            lineHeight: this.lineHeight,
            letterSpacing: this.letterSpacing
        };
    }

    constructor(private settingsService: SettingsService) { }

    public settingChange(setting: string, value: any): void {
        const currentValue = this[setting];

        if (currentValue === value) {
            this[setting] = defaultSettings[setting];
        } else {
            this[setting] = value;
        }
    }
}
