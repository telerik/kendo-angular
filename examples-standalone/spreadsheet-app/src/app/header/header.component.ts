import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SVGIcon, logoutIcon } from "@progress/kendo-svg-icons";

@Component({
    selector: "app-header",
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
