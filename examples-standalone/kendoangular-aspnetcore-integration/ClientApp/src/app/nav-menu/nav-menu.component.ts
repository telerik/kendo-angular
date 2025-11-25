import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
    selector: "app-nav-menu",
    templateUrl: "./nav-menu.component.html",
    styleUrls: ["./nav-menu.component.css"],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgClass]
})
export class NavMenuComponent {
    isExpanded = false;

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
