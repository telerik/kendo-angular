import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    imports: [RouterOutlet, NavMenuComponent]
})
export class AppComponent {
    title = "app";
}
