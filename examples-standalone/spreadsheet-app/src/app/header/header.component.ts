import { Component } from "@angular/core";
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";
import { SVGIcon, logoutIcon, menuIcon } from "@progress/kendo-svg-icons";
import { KENDO_NAVIGATION } from "@progress/kendo-angular-navigation";
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";

@Component({
    selector: "app-header",
    imports: [
        RouterLink,
        RouterLinkActive,
        KENDO_BUTTONS,
        KENDO_NAVIGATION,
        KENDO_ICONS
    ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {
    public logoutIcon: SVGIcon = logoutIcon;
    public menuIcon: SVGIcon = menuIcon;
    public roleName: string = "User";
    public isNavigationOpen = false;

    constructor(private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            if (params["role"]) {
                this.roleName = params["role"];
            } else {
                // Handle case where 'role' parameter is not present
                this.roleName = "User";
            }
        });
    }

    public toggleNavigation(): void {
        this.isNavigationOpen = !this.isNavigationOpen;
    }

    public closeNavigation(): void {
        this.isNavigationOpen = false;
    }
}
