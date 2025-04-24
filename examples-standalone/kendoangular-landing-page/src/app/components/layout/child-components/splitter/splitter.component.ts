import { Component } from '@angular/core';
import { KENDO_SPLITTER } from '@progress/kendo-angular-layout';

@Component({
    selector: 'splitter-component',
    standalone: true,
    imports: [KENDO_SPLITTER],
    templateUrl: './splitter.component.html',
    styleUrl: './splitter.component.css',
})
export class SplitterComponent {}
