import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';

type UtilityPage = 'login' | 'settings' | 'notifications' | 'help' | 'not-found';

@Component({
    selector: 'app-utility-page',
    templateUrl: './utility-page.component.html',
    styleUrls: ['./utility-page.component.scss'],
    imports: [CommonModule, RouterLink, KENDO_BUTTONS, KENDO_INPUTS, KENDO_LAYOUT]
})
export class UtilityPageComponent {
    public readonly page = computed(() => (this.route.snapshot.data['page'] as UtilityPage) ?? 'not-found');

    constructor(private route: ActivatedRoute) {}
}
