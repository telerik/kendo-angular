import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';

@Component({
    selector: 'app-not-found',
    imports: [RouterModule, KENDO_BUTTONS, KENDO_LAYOUT],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
