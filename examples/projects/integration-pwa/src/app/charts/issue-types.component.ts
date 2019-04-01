import { Component, Input, ViewChild, HostBinding } from '@angular/core';

@Component({
    selector: 'issue-types',
    template: `
        <h4 class="card-header">Issue Types</h4>
        <div class="card-body">
            <kendo-chart (seriesHover)="onHover($event)">
                <kendo-chart-series>
                    <kendo-chart-series-item
                        [holeSize]="100"
                        [data]="issues"
                        type="donut"
                        field="value"
                        categoryField="type"
                        [overlay]="false"
                    ></kendo-chart-series-item>
                </kendo-chart-series>
                <kendo-chart-legend position="bottom" [labels]="{font: '0.65em Roboto, Arial, sans-serif'}">
                </kendo-chart-legend>
            </kendo-chart>
            <div class="comp-label chart-label" [style.color]="hoverColor">
                <strong>{{donutPercent}}</strong>
                <small>{{donutLabel}}</small>
            </div>
        </div>
    `
})
export class IssueTypesComponent {
    public donutPercent: string;
    public donutLabel: string;
    public issues;
    public hoverColor = 'rgb(255, 99, 88)';

    @Input() public set data(data) {
        this.issues = data;
        data.forEach(series =>  {
            if (series.type === 'SEV: LOW') {
                this.setDonutLegend({
                    value: series.value,
                    category: series.type,
                    point: {
                        options: {
                            color: this.hoverColor
                        }
                    }
                });
            }
        })
    };

    @HostBinding('class') get className() {
        return 'card issue-types';
    };

    public onHover(event) {
        this.setDonutLegend(event);
    };

    private setDonutLegend(series) {
        this.hoverColor = series.point.options.color;
        this.donutPercent = Math.round(series.value * 100 || 0) + '%';
        this.donutLabel = series.category;
    };
}
