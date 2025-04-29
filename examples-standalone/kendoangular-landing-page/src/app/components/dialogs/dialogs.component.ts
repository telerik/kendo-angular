import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_DIALOGS } from '@progress/kendo-angular-dialog';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';

@Component({
    selector: 'app-dialogs',
    imports: [KENDO_DIALOGS, KENDO_BUTTONS, KENDO_INPUTS, KENDO_DATEINPUTS, FormsModule],
    templateUrl: './dialogs.component.html',
    styleUrl: './dialogs.component.css',
})
export class DialogsComponent {
    public windowOpened = true;
    public formSubmitted = false;
    public firstName = '';
    public lastName = '';
    public dialogOpened = false;
    public confirmationResult = '';

    public openWindow(): void {
        this.windowOpened = true;
    }

    public closeWindow(): void {
        this.windowOpened = false;
    }

    public submitWindow(): void {
        this.formSubmitted = true;
        this.closeWindow();
    }

    public openDialog(): void {
        this.dialogOpened = true;
    }

    public closeDialog(): void {
        this.dialogOpened = false;
    }

    public onDialogAction(action: string): void {
        this.confirmationResult = action;
        this.closeDialog();
    }

    public reset(): void {
        this.formSubmitted = false;
        this.confirmationResult = '';
        this.firstName = '';
        this.lastName = '';
    }
}
