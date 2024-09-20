import {
    Injectable
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const defaultFont = `'Roboto', sans-serif`;
const defaultTheme = 'https://kendo.cdn.telerik.com/themes/8.2.1/default/default-turquoise.css';

@Injectable()
export class SettingsService {
    private _settings = {
        fontSize: 16,
        colorTheme: defaultTheme,
        fontFamily: defaultFont,
        underlineLinks: false,
        pauseAnimations: false,
        lgSizeWidgets: false,
        lineHeight: 1.2,
        letterSpacing: 0
    };

    public get settings(): any {
        return {...this._settings};
    }

    public changes: BehaviorSubject<any> = new BehaviorSubject<any>(this.settings);

    public notifySettingChange(changes: any): void {
        for (let k in changes) {
            this._settings[k] = changes[k];
        }

        this.changes.next(this.settings);
    }

    public resetSettings(): void {
        this._settings = {
            fontSize: 16,
            colorTheme: defaultTheme,
            fontFamily: defaultFont,
            underlineLinks: false,
            pauseAnimations: false,
            lgSizeWidgets: false,
            lineHeight: 1.2,
            letterSpacing: 0
        }

        this.changes.next(this.settings);
    }
}
