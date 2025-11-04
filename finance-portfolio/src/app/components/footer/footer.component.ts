import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
    public currentYear: number = new Date().getFullYear();
    constructor(public router: Router) {}
}
