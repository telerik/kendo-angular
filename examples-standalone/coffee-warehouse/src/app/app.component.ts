import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerComponent, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public selected: string = 'Dashboard';

    constructor(private router: Router) {
        this.router.navigate(['dashboard']);
    }

    public toggleDrawer(drawer: DrawerComponent): void {
        drawer.toggle();
    }

    public items: Array<any> = [
        { text: 'Dashboard', icon: 'k-i-grid', selected: true, path: 'dashboard' },
        { separator: true },
        { text: 'Planning', icon: 'k-i-calendar', path: 'planning' },
        { text: 'Profile', icon: 'k-i-user', path: 'profile' },
        { separator: true },
        { text: 'Info', icon: 'k-i-information', path: 'info' }
    ];

    public onSelect(ev: DrawerSelectEvent): void {
        this.router.navigate([ev.item.path]);
        this.selected = ev.item.text;
    }
}
