import {
    Injectable
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const defaultFont = 'defaultFont';
const defaultTheme = 'defaultTheme';

@Injectable()
export class SettingsService {
    private _settings = {
        fontSize: 16,
        colorTheme: defaultTheme,
        font: defaultFont,
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
}
