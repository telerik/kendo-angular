import { Component, ViewEncapsulation } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { SchedulerComponent } from "./components/scheduler/scheduler.component";
import { DynamicGridComponent } from "./components/dynamic-grid/dynamic-grid.component";
import { ChartsComponent } from "./components/charts/charts.component";
import { HeaderComponent } from "./components/header/header.component";
import { MyLayoutComponent } from "./components/layout/my-layout.component";
import { ConversationalUiComponent } from "./components/conversational-ui/conversational-ui.component";

@Component({
    selector: "app-root",
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        SchedulerComponent,
        DynamicGridComponent,
        ChartsComponent,
        HeaderComponent,
        MyLayoutComponent,
        ConversationalUiComponent,
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {}
