import { Component } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { checkCircleIcon, editToolsIcon, userIcon, SVGIcon } from '@progress/kendo-svg-icons';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [KENDO_BUTTONS, KENDO_ICONS, KENDO_LAYOUT],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
    public emailUpdates = true;
    public securityAlerts = true;
    public actionMessage = '';
    public userIcon: SVGIcon = userIcon;
    public editToolsIcon: SVGIcon = editToolsIcon;
    public checkCircleIcon: SVGIcon = checkCircleIcon;

    public savePreferences(): void {
        this.actionMessage = 'Preferences saved for this demo session. No account data was changed.';
    }
}
