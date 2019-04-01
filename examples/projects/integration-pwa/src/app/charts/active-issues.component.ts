import { Component, Input } from '@angular/core';

@Component({
    selector: 'active-issues',
    template: `
        <div class="card">
            <h3 class="card-header">Active Issues</h3>
            <div class="card-body">

                <div class="row">

                    <div class="col-12 col-lg-6 col-xl pb-4 active-issues">
                        <span class="comp-label">
                            <strong>{{ issues.open + issues.closed }}</strong>
                            <small>Active issues</small>
                        </span>
                        <kendo-chart style="height: 80px;">
                            <kendo-chart-series-defaults type="column" [stack]="true" [gap]="0.5" [overlay]="false"></kendo-chart-series-defaults>
                            <kendo-chart-series>
                                <kendo-chart-series-item [color]="'#888'" [data]="active" field="count" categoryField="date" aggregate="count"></kendo-chart-series-item>
                            </kendo-chart-series>
                            <kendo-chart-category-axis>
                                <kendo-chart-category-axis-item
                                    [baseUnit]="baseUnit"
                                    [majorTicks]="{visible: false}"
                                    [labels]="{step: 4, skip: 2, font: '10px sans-serif'}"
                                    [majorGridLines]="{visible: false}"
                                    [line]="{visible: false}"
                                ></kendo-chart-category-axis-item>
                            </kendo-chart-category-axis>
                            <kendo-chart-value-axis>
                                <kendo-chart-value-axis-item [visible]="false" [majorGridLines]="{visible: false}">
                                </kendo-chart-value-axis-item>
                            </kendo-chart-value-axis>
                        </kendo-chart>
                    </div>

                    <div class="col-12 col-lg-6 col-xl pb-4 text-success closed-issues">
                        <span class="comp-label">
                            <strong>{{ issues.closed }}</strong>
                            <small>Closed issues</small>
                        </span>
                        <kendo-chart style="height: 80px;">
                            <kendo-chart-series-defaults type="column" [stack]="true" [gap]="0.5" [overlay]="false"></kendo-chart-series-defaults>
                            <kendo-chart-series>
                                <kendo-chart-series-item [color]="'#35C473'" [data]="data.closed" field="count" categoryField="date" aggregate="count"></kendo-chart-series-item>
                            </kendo-chart-series>
                            <kendo-chart-category-axis>
                                <kendo-chart-category-axis-item
                                    [baseUnit]="baseUnit"
                                    [majorTicks]="{visible: false}"
                                    [labels]="{step: 4, skip: 2, font: '10px sans-serif'}"
                                    [majorGridLines]="{visible: false}"
                                    [line]="{visible: false}"
                                ></kendo-chart-category-axis-item>
                            </kendo-chart-category-axis>
                            <kendo-chart-value-axis>
                                <kendo-chart-value-axis-item [visible]="false" [majorGridLines]="{visible: false}">
                                </kendo-chart-value-axis-item>
                            </kendo-chart-value-axis>
                        </kendo-chart>
                    </div>

                    <div class="col-12 col-lg-6 col-xl pb-4 text-danger open-issues">
                        <span class="comp-label">
                            <strong>{{ issues.open }}</strong>
                            <small>Open issues</small>
                        </span>
                        <kendo-chart style="height: 80px;">
                            <kendo-chart-series-defaults type="column" [stack]="true" [gap]="0.5" [overlay]="false"></kendo-chart-series-defaults>
                            <kendo-chart-series>
                                <kendo-chart-series-item [color]="'#CC3458'" [data]="data.open" field="count" categoryField="date" aggregate="count"></kendo-chart-series-item>
                            </kendo-chart-series>
                            <kendo-chart-category-axis>
                                <kendo-chart-category-axis-item
                                    [baseUnit]="baseUnit"
                                    [majorTicks]="{visible: false}"
                                    [labels]="{step: 4, skip: 2, font: '10px sans-serif'}"
                                    [majorGridLines]="{visible: false}"
                                    [line]="{visible: false}"
                                ></kendo-chart-category-axis-item>
                            </kendo-chart-category-axis>
                            <kendo-chart-value-axis>
                                <kendo-chart-value-axis-item [visible]="false" [majorGridLines]="{visible: false}">
                                </kendo-chart-value-axis-item>
                            </kendo-chart-value-axis>
                        </kendo-chart>
                    </div>

                    <div class="col-12 col-lg-6 col-xl pb-4 close-rate">
                        <span class="comp-label">
                            <strong>{{ issues.closeRate.average | percent:'2.0-0' }}</strong>
                            <small>Close rate</small>
                        </span>
                        <p class="m-0 small text-uppercase text-muted">
                            Highest:
                            {{issues.closeRate.highest.close_rate | percent: '2.0-0' }}
                            on {{issues.closeRate.highest.created_at | date}}
                        </p>
                        <p class="m-0 small text-uppercase text-muted">
                            Lowest:
                            {{issues.closeRate.lowest.close_rate | percent: '2.0-0' }}
                            on {{issues.closeRate.lowest.created_at | date}}
                        </p>
                        <kendo-chart style="height: 20px;" [chartArea]="{margin: -20}">
                            <kendo-chart-series>
                                <kendo-chart-series-item type="bullet"
                                    [data]="bulletData"
                                    [target]="{color: '#FFF'}"
                                    currentField="current"
                                    targetField="target"
                                    color="#CC3458"
                                ></kendo-chart-series-item>
                            </kendo-chart-series>
                            <kendo-chart-value-axis>
                                <kendo-chart-value-axis-item
                                    [plotBands]="[{from:0, to:100, color: '#35C473'}]"
                                    [visible]="false"
                                    [majorGridLines]="{visible: false}">
                                </kendo-chart-value-axis-item>
                            </kendo-chart-value-axis>
                        </kendo-chart>
                    </div>

                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <h3>All issues</h3>
                        <kendo-chart>
                            <kendo-chart-series-defaults type="column" [stack]="true" [gap]="0.06" [overlay]="false"></kendo-chart-series-defaults>
                            <kendo-chart-series>
                                <kendo-chart-series-item [opacity]="0.3" [border]="{color: '#35C473', opacity: 0.3}" [color]="'#35C473'" [data]="data.open" field="count" categoryField="date" aggregate="count"></kendo-chart-series-item>
                                <kendo-chart-series-item [opacity]="0.3" [border]="{color: '#CC3458', opacity: 0.3}" [color]="'#CC3458'" [data]="data.closed" field="count" categoryField="date" aggregate="count"></kendo-chart-series-item>
                            </kendo-chart-series>
                            <kendo-chart-category-axis>
                                <kendo-chart-category-axis-item
                                    [baseUnit]="baseUnit"
                                    [majorTicks]="{visible: false}"
                                    [line]="{visible: false}"
                                    [majorGridLines]="{visible: false}"
                                    [labels]="{rotation: 'auto', margin: { top: 8 }}"
                                ></kendo-chart-category-axis-item>
                            </kendo-chart-category-axis>
                            <kendo-chart-value-axis>
                                <kendo-chart-value-axis-item [line]="{visible: false}" [labels]="{step: 2, skip: 2, margin: { right: 4 }}" [majorGridLines]="{step: 2, skip: 2, color: '#F0F2F2'}">
                                </kendo-chart-value-axis-item>
                            </kendo-chart-value-axis>
                        </kendo-chart>
                    </div>
                </div>

            </div>
        </div>
    `
})
export class ActiveIssuesComponent {
    public baseUnit;
    public bulletData;

    @Input() public data;
    @Input() public active;
    @Input() public issues;
    @Input() public set months(months) {
        months > 3 ? this.baseUnit = 'months' : this.baseUnit = 'weeks';
    }

    @Input() public set closeRate(rate) {
        this.bulletData = [{target: 70, current: Math.round(rate * 100)}]
    };
}
