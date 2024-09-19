import { Component } from '@angular/core';
import { SettingsService } from './settings.service';
import { groupBy } from '@progress/kendo-data-query';

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

    public defaultSettings = {
        textSize: 16,
        colorTheme: defaultTheme,
        font: defaulFont,
        underlineLinks: false,
        pauseAnimations: false,
        lgSizeWidgets: false,
        lineHeight: 1.2,
        letterSpacing: 1
    }

    public disabilitiesData: any[] = groupBy([{
            type: 'Visual Impairments',
            text: 'Low Vision'
        }, {
            type: 'Visual Impairments',
            text: 'Color Blindness'
        }, {
            type: 'Visual Impairments',
            text: 'Blindness'
        }, {
            type: 'Hearing Impairments',
            text: 'Deafness'
        }, {
            type: 'Hearing Impairments',
            text: 'Hard of Hearing'
        }, {
            type: 'Motor Impairments',
            text: 'Limited Mobility'
        }, {
            type: 'Motor Impairments',
            text: 'Tremors'
        }, {
            type: 'Cognitive Disabilities',
            text: 'Dyslexia'
        }, {
            type: 'Cognitive Disabilities',
            text: 'ADHD'
        }], [{field: 'type'}]);

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
