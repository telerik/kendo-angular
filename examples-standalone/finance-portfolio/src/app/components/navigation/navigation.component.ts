import { Component, HostBinding } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    imports: [RouterLink, RouterLinkActive, KENDO_BUTTONS]
})
export class NavigationComponent {
    @HostBinding('class.text-center')
    public hostClass = true;
}
