import { Component } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { SVGIcon, logoutIcon } from "@progress/kendo-svg-icons";
import { KENDO_NAVIGATION } from "@progress/kendo-angular-navigation";
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";

@Component({
    selector: "app-header",
    imports: [
        RouterLink,
        KENDO_BUTTONS,
        KENDO_NAVIGATION,
        KENDO_ICONS
    ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {
    public logoutIcon: SVGIcon = logoutIcon;
    public roleName: string = "User";

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
}
