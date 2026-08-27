import { Component } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { arrowRotateCcwIcon, eyeIcon, lockIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { cardActivity, CardActivity } from '../../data/finance-pages';

@Component({
    selector: 'app-cards',
    standalone: true,
    imports: [KENDO_BUTTONS, KENDO_ICONS],
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.css',
})
export class CardsComponent {
    public activity: CardActivity[] = cardActivity;
    public actionMessage = '';
    public eyeIcon: SVGIcon = eyeIcon;
    public lockIcon: SVGIcon = lockIcon;
    public refreshIcon: SVGIcon = arrowRotateCcwIcon;

    public demoAction(action: string): void {
        this.actionMessage = `${action} is a demo affordance. Secure card changes are disabled in this showcase.`;
    }
}
