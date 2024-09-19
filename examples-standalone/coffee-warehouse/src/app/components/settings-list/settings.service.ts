import {
    Injectable
} from '@angular/core';

const defaultFont = 'defaultFont';
const defaultTheme = 'defaultTheme';

@Injectable()
export class SettingsService {
    public textSize: number = 16;
    public colorTheme = defaultTheme;
    public font = defaultFont;
    public underlineLinks: boolean = false;
    public pauseAnimations: boolean = false;
    public lgSizeWidgets: boolean = false;
    public lineHeight: number = 1.2;
    public letterSpacing: number = 1;

    private defaultSettings = {
        textSize: 16,
        colorTheme: defaultTheme,
        font: defaultFont,
        underlineLinks: false,
        pauseAnimations: false,
        lgSizeWidgets: false,
        lineHeight: 1.2,
        letterSpacing: 1
    };

    public notifySettingChange(setting: string, value: any): void {
        const currentValue = this[setting];

        if (currentValue === value) {
            this[setting] = this.defaultSettings[setting];
        } else {
            this[setting] = value;
        }
    }
}
