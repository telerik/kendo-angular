import { Component, ViewEncapsulation } from "@angular/core";
import { BottomLeftComponent } from "./bottom-left/bottom-left.component";
import { BottomRightComponent } from "./bottom-right/bottom-right.component";
import { TransactionsDashboardComponent } from "./transactions-dashboard/transactions-dashboard.component";

@Component({
    selector: "app-header",
    encapsulation: ViewEncapsulation.None,
    imports: [BottomLeftComponent, BottomRightComponent, TransactionsDashboardComponent],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {}
