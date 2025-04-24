import { Component } from '@angular/core';
import { KENDO_STACKLAYOUT } from '@progress/kendo-angular-layout';

@Component({
    selector: 'stacklayout-component',
    standalone: true,
    imports: [KENDO_STACKLAYOUT],
    templateUrl: './stacklayout.component.html',
    styleUrl: './stacklayout.component.css',
})
export class StacklayoutComponent {}
