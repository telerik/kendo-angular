import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-active-issues',
    template: `
        <div class="k-card">
            <h2 class="k-card-header m-0">Active Issues</h2>
            <div class="k-card-body">

                <div class="row">

                    <div class="col-sm-12 col-lg-6 col-xl active-issues">
                        <div class="comp-label">
                            <div class="issues-count">{{ issues.open + issues.closed }}</div>
                            <div class="issues-label">Active issues</div>
                        </div>
                        <kendo-chart style="height: 80px;">
                        <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
                            <kendo-chart-series-defaults type="column"
                            [stack]="true"
                            [gap]="0.5"
                            [overlay]="false"></kendo-chart-series-defaults>
                            <kendo-chart-series>
                                <kendo-chart-series-item
                                type="area"
                                [line]="{style:'smooth'}"
                                [color]="'#888'"
                                [data]="active"
                                field="count"
                                categoryField="date"
                                aggregate="count"></kendo-chart-series-item>
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

                    <div class="col-12 col-lg-6 col-xl pb-4 text-danger closed-issues">
                        <span class="comp-label">
                            <div class="issues-count">{{ issues.closed }}</div>
                            <div class="issues-label">Closed issues</div>
                        </span>
                        <kendo-chart style="height: 80px;">
                        <kendo-chart-tooltip format="{0}"></kendo-chart-tooltip>
                            <kendo-chart-series-defaults type="column" [stack]="true" [gap]="0.5" [overlay]="false">
                            </kendo-chart-series-defaults>
                            <kendo-chart-series>
                                <kendo-chart-series-item
                                type="area"
                                [line]="{style:'smooth'}"
                                [color]="'#e91e63'"
                                [data]="data.closed"
                                field="count"
                                categoryField="date"
                                aggregate="count">
                                </kendo-chart-series-item>
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

                    <div class="col-12 col-lg-6 col-xl pb-4 text-success open-issues">
                        <span class="comp-label">
                            <div class="issues-count">{{ issues.open }}</div>
                            <div class="issues-label">Open issues</div>
                        </span>
                        <kendo-chart style="height: 80px;">
                        <kendo-chart-tooltip format="{0}"></kendo-chart-tooltip>
                            <kendo-chart-series-defaults type="column" [stack]="true" [gap]="0.5" [overlay]="false">
                            </kendo-chart-series-defaults>
                            <kendo-chart-series>
                                <kendo-chart-series-item
                                type="area"
                                [line]="{style:'smooth'}"
                                [color]="'#27c46d'"
                                [data]="data.open"
                                field="count"
                                categoryField="date"
                                aggregate="count">
                                </kendo-chart-series-item>
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
                            <div class="issues-count">{{ issues.closeRate.average | percent:'2.0-0' }}</div>
                            <div class="issues-label">Close rate</div>
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
                        <kendo-chart-tooltip format="{0}"></kendo-chart-tooltip>
                            <kendo-chart-series>
                                <kendo-chart-series-item type="bullet"
                                    [data]="bulletData"
                                    [target]="{color: '#FFF'}"
                                    currentField="current"
                                    targetField="target"
                                    color="#e91e63"
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
                    <div class="col-12 all-issues">
                        <kendo-chart>
                            <kendo-chart-tooltip format="{0}"></kendo-chart-tooltip>
                            <kendo-chart-series-defaults [type]="'area'" [stack]="true" [gap]="0.06" [overlay]="false">
                            </kendo-chart-series-defaults>
                            <kendo-chart-series>
                                <kendo-chart-series-item
                                [line]="{style:'smooth'}"
                                    [opacity]="0.3"
                                    [border]="{color: '#35C473', opacity: 0.3}"
                                    [color]="'#35C473'"
                                    [data]="data.open" field="count" categoryField="date" aggregate="count"></kendo-chart-series-item>
                                <kendo-chart-series-item
                                    [line]="{style:'smooth'}"
                                    [opacity]="0.3"
                                    [border]="{color: '#CC3458', opacity: 0.3}"
                                    [color]="'#CC3458'" [data]="data.closed"
                                    field="count" categoryField="date"
                                    aggregate="count"></kendo-chart-series-item>
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
                                <kendo-chart-value-axis-item
                                    [line]="{visible: false}"
                                    [labels]="{step: 2, skip: 2, margin: { right: 4 }}"
                                    [majorGridLines]="{step: 2, skip: 2, color: '#F0F2F2'}">
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
        this.bulletData = [{target: 70, current: Math.round(rate * 100)}];
    }
}
