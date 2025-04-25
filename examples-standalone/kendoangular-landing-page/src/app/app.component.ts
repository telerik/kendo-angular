import { Component, ViewEncapsulation } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: "app-root",
    encapsulation: ViewEncapsulation.None,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {}
