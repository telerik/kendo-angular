import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: false
})
export class NavigationComponent {
    @HostBinding('class.text-center')
    public hostClass = true;
}
