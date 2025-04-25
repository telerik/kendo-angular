import { Component, ViewEncapsulation } from '@angular/core';
import { KENDO_STEPPER } from '@progress/kendo-angular-layout';
import { bookIcon, eyeIcon, fileAddIcon, paperclipIcon, userIcon } from '@progress/kendo-svg-icons';

@Component({
    selector: 'stepper-component',
    encapsulation: ViewEncapsulation.None,
    imports: [KENDO_STEPPER],
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
    public current = 1;

    public steps = [
        { label: 'Personal Info', svgIcon: userIcon },
        { label: 'Education', svgIcon: bookIcon },
        { label: 'Attachments', svgIcon: paperclipIcon, optional: true },
        { label: 'Preview', svgIcon: eyeIcon },
        { label: 'Submit', svgIcon: fileAddIcon },
    ];
}
