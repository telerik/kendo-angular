import { Component } from '@angular/core';
import { SettingsService } from './settings.service';
import { groupBy } from '@progress/kendo-data-query';

@Component({
    selector: 'app-settings-list-component',
    templateUrl: './settings-list.component.html'
})
export class SettingsListComponent {
    public settingsExpanded = true;

    public get textSize(): number {
        return this.settingsService.textSize;
    }

    public get colorTheme(): string {
        return this.settingsService.colorTheme;
    }

    public get font(): string {
        return this.settingsService.font;
    }

    public get underlineLinks(): boolean {
        return this.settingsService.underlineLinks;
    }

    public get pauseAnimations(): boolean {
        return this.settingsService.pauseAnimations;
    }

    public get lgSizeWidgets(): boolean {
        return this.settingsService.lgSizeWidgets;
    }

    public get lineHeight(): number {
        return this.settingsService.lineHeight;
    }

    public get letterSpacing(): number {
        return this.settingsService.letterSpacing;
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
        this.settingsService.notifySettingChange(setting, value);
    }
}
