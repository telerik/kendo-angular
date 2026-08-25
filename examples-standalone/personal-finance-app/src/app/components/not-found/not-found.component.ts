import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
    selector: 'app-not-found',
    imports: [RouterModule, KENDO_BUTTONS],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
