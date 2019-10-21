import { Component, ViewEncapsulation, NgModule, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './signin.template.html'
})
export class SigninComponent {
    constructor(private router: Router) {}

    @HostBinding('attr.id') protected get id(): string {
        return 'login';
    }

    @HostBinding('class') protected get appClass(): string {
        return 'justify-content-center';
    }

    public onLoginClick() {
        this.router.navigate(['/dashboard']);
    }
}
