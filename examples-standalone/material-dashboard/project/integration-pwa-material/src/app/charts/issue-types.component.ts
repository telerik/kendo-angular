import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'app-issue-types',
    template: `
        <h2 class="k-card-header">Issue Types</h2>
        <div class="k-card-body height-1">
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
                <kendo-chart-legend position="bottom">
                </kendo-chart-legend>
            </kendo-chart>
            <div class="comp-label chart-label" [style.color]="hoverColor">
                <div class="issues-count">
                  {{donutPercent}}
                  <span class="percentage">%</span>
                </div>
                <div class="issues-label">{{donutLabel}}</div>
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
        });
    }

    @HostBinding('class') get className() {
        return 'k-card issue-types';
    }

    public onHover(event) {
        this.setDonutLegend(event);
    }

    private setDonutLegend(series) {
        this.hoverColor = series.point.options.color;
        this.donutPercent = Math.round(series.value * 100 || 0) + '';
        this.donutLabel = series.category;
    }
}
