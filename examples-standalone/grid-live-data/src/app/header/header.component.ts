import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';

    constructor() {}

    ngOnInit(): void {}
}
