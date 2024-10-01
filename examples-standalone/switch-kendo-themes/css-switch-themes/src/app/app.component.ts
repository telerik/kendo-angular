import { Component, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { KENDO_GRID } from "@progress/kendo-angular-grid";
import { ChartComponent, KENDO_CHARTS } from "@progress/kendo-angular-charts";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, KENDO_GRID, KENDO_CHARTS, KENDO_INPUTS],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    @ViewChild("chart") public chart!: ChartComponent;

    public gridData: any[] = [
        { ProductID: 1, ProductName: "Tea", Category: "Beverages", Price: 20 },
        { ProductID: 2, ProductName: "Coffee", Category: "Beverages", Price: 30 },
        { ProductID: 3, ProductName: "Cake", Category: "Desserts", Price: 15 },
        { ProductID: 4, ProductName: "Sandwich", Category: "Snacks", Price: 10 },
    ];

    public isDarkTheme: boolean = false;

    public toggleTheme(): void {
        const themeRef = document.getElementById("theme");
        const theme = themeRef?.getAttribute("href");

        if (themeRef && theme) {
            const nextTheme = themeRef?.getAttribute("data-alt-href") ?? theme;
            themeRef.setAttribute("href", nextTheme);
            themeRef.setAttribute("data-alt-href", theme);
            setTimeout(() => {
                this.chart.reloadTheme();
            }, 30);
        }
    }
}
