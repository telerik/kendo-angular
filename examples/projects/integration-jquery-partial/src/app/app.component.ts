import { Component, ViewChild } from '@angular/core';
import { products } from './products';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'integration-jquery-partial';
    @ViewChild('pivot', { static: false }) pivot;

    public pivotGrid;

    ngAfterViewInit() {


        this.pivotGrid = $(this.pivot.nativeElement).kendoPivotGrid({
            filterable: true,
            columnWidth: 120,
            height: 570,
            dataSource: {
                data: products,
                schema: {
                    model: {
                        fields: {
                            ProductName: { type: "string" },
                            UnitPrice: { type: "number" },
                            UnitsInStock: { type: "number" },
                            Discontinued: { type: "boolean" },
                            CategoryName: { field: "Category.CategoryName" }
                        }
                    },
                    cube: {
                        dimensions: {
                            ProductName: { caption: "All Products" },
                            CategoryName: { caption: "All Categories" },
                            Discontinued: { caption: "Discontinued" }
                        },
                        measures: {
                            "Sum": { field: "UnitPrice", format: "{0:c}", aggregate: "sum" },
                            "Average": { field: "UnitPrice", format: "{0:c}", aggregate: "average" }
                        }
                    }
                },
                columns: [{ name: "CategoryName", expand: true }, { name: "ProductName" }],
                rows: [{ name: "Discontinued", expand: true }],
                measures: ["Sum"]
            }
        }).data("kendoPivotGrid");
    }
}
