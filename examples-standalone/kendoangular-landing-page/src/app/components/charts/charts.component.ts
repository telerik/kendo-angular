import { Component } from "@angular/core";
import { KENDO_CHARTS, SeriesLabelsContentArgs } from "@progress/kendo-angular-charts";
import { commitData } from "../../data/commit-data";

@Component({
    selector: "app-charts",
    imports: [KENDO_CHARTS],
    templateUrl: "./charts.component.html",
    styleUrl: "./charts.component.css",
})
export class ChartsComponent {
    public donutData = [
        { kind: "Hydroelectric", share: 0.175 },
        { kind: "Nuclear", share: 0.238 },
        { kind: "Coal", share: 0.118 },
        { kind: "Solar", share: 0.052 },
        { kind: "Wind", share: 0.225 },
        { kind: "Other", share: 0.192 },
    ];

    public commitData = commitData();

    public lineChartCategories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    public lineChartData = [
        [123, 276, 310, 212, 240, 156, 98],
        [165, 210, 287, 144, 190, 167, 212],
        [56, 140, 195, 46, 123, 78, 95],
    ];

    public labelContent(e: SeriesLabelsContentArgs): string {
        return e.category;
    }
}
