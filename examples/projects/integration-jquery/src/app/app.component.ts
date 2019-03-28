import { Component } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    constructor() {
        if (window !== undefined) {
            (<any>window).$ = kendo.jQuery;
        }
    }
}
