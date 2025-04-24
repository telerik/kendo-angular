import { Component } from '@angular/core';
import { KENDO_EXPANSIONPANEL } from '@progress/kendo-angular-layout';

@Component({
    selector: 'expansionpanel-component',
    standalone: true,
    imports: [KENDO_EXPANSIONPANEL],
    templateUrl: './expansionpanel.component.html',
    styleUrl: './expansionpanel.component.css',
})
export class ExpansionpanelComponent {}
