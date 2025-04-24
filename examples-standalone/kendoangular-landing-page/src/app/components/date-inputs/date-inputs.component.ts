import { Component, ViewEncapsulation } from '@angular/core';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';

@Component({
    selector: 'app-date-inputs',
    imports: [KENDO_DATEINPUTS, KENDO_LABELS],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './date-inputs.component.html',
    styleUrl: './date-inputs.component.css',
})
export class DateInputsComponent {
    public range = { start: new Date(), end: new Date() };
}
