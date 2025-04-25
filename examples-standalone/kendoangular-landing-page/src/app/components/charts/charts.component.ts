import { Component } from "@angular/core";
import { KENDO_CHARTS, Series, SeriesLabelsContentArgs, ValueAxis } from "@progress/kendo-angular-charts";

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

    public series: Series[] = [
        {
            type: "column",
            data: [20, 40, 45, 30, 50],
            stack: true,
            name: "on battery",
            color: "#cc6e38",
        },
        {
            type: "column",
            data: [20, 30, 35, 35, 40],
            stack: true,
            name: "on gas",
            color: "#ef955f",
        },
        {
            type: "line",
            data: [30, 38, 40, 32, 42],
            name: "mpg",
            color: "#ec5e0a",
            axis: "mpg",
        },
        {
            type: "line",
            data: [7.8, 6.2, 5.9, 7.4, 5.6],
            name: "l/100 km",
            color: "#4e4141",
            axis: "l100km",
        },
    ];

    public valueAxes: ValueAxis[] = [
        {
            title: { text: "miles" },
            min: 0,
            max: 100,
        },
        {
            name: "km",
            title: { text: "km" },
            min: 0,
            max: 161,
            majorUnit: 32,
        },
        {
            name: "mpg",
            title: { text: "miles per gallon" },
            color: "#ec5e0a",
        },
        {
            name: "l100km",
            title: { text: "liters per 100km" },
            color: "#4e4141",
        },
    ];

    public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];

    public labelContent(e: SeriesLabelsContentArgs): string {
        return e.category;
      }
    public crossingValues: number[] = [0, 0, 10, 10];
}
