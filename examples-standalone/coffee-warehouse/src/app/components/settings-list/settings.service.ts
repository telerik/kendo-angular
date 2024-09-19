import {
    Injectable
} from '@angular/core';

const defaulFont = 'defaultFont';
const defaultTheme = 'defaultTheme';

@Injectable()
export class SettingsService {
    public textSize: number = 16;
    public colorTheme = defaultTheme;
    public font = defaulFont;
    public underlineLinks: boolean = false;
    public pauseAnimations: boolean = false;
    public lgSizeWidgets: boolean = false;
    public lineHeight: number = 1.2;
    public letterSpacing: number = 1;

    public defaultSettings = {
        textSize: 16,
        colorTheme: defaultTheme,
        font: defaulFont,
        underlineLinks: false,
        pauseAnimations: false,
        lgSizeWidgets: false,
        lineHeight: 1.2,
        letterSpacing: 1
    };

    private _accessibilitySettings = this.defaultSettings;

    public set accessibilitySettings(value: any) {
        this._accessibilitySettings = value;
    }

    public get accessibilitySettings(): any {
        return this._accessibilitySettings;
    }

    public notifySettingChange(setting: string, value: any): void {
        const currentValue = this[setting];

        if (currentValue === value) {
            this[setting] = this.defaultSettings[setting];
        } else {
            this[setting] = value;
        }
    }
}
