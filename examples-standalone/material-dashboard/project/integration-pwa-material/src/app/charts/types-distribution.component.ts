import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'app-types-distribution',
    template: `
        <div class="k-card">
            <h2 class="k-card-header">Types Distribution</h2>
            <div class="k-card-body">
                <div class="row">
                  <div *ngFor="let button of seriesColors" (click)="addSeries(button, true)"
                      [style.color]="button.active ? button.value : initialGrey"
                      class="col-6 col-sm-4 col-xl-2 comp-label label-clickable">
                      <div class="issues-count">{{data[button.label].length}}</div>
                      <div class="issues-label">{{button.label}}</div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 types-distribution">
                      <kendo-chart [pannable]="true" [zoomable]="true" style="height: 300px;" [transitions]="false">
                      <kendo-chart-tooltip format="{0}"></kendo-chart-tooltip>
                          <kendo-chart-series-defaults type="line" [overlay]="false"></kendo-chart-series-defaults>
                          <kendo-chart-category-axis>
                              <kendo-chart-category-axis-item
                                  baseUnit="months"
                                  [majorTicks]="{visible: false}"
                                  [labels]="{step: 4, skip: 2}"
                                  [majorGridLines]="{visible: false}"
                                  [line]="{visible: false}"
                              ></kendo-chart-category-axis-item>
                          </kendo-chart-category-axis>
                          <kendo-chart-series>
                              <kendo-chart-series-item *ngFor="let series of visibleSeries"
                                  [data]="series.data"
                                  [markers]="series.markers"
                                  [color]="series.color"
                                  style="smooth"
                                  aggregate="count"
                                  categoryField="date"
                              ></kendo-chart-series-item>
                          </kendo-chart-series>
                          <kendo-chart-value-axis>
                              <kendo-chart-value-axis-item
                                  [line]="{visible: false}" [labels]="{step: 2, skip: 2}"
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
export class TypesDistributionComponent implements OnInit, OnChanges {
    private baseUnit;
    @Input() public data;
    @Input() public set months(months) {
        months > 3 ? this.baseUnit = 'months' : this.baseUnit = 'weeks';
    }
    public initialGrey = '#A2ACAC';
    public series = [];
    public visibleSeries = [];

    public seriesColors = [
        { label: 'SEV: Low', value: '#FF9966', active: false },
        { label: 'SEV: Medium', value: '#BB6ACB', active: false },
        { label: 'SEV: High', value: '#52C3D3', active: false },
        { label: 'Enhancement', value: '#22C85D', active: false },
        { label: 'Feature', value: '#FF6358', active: false },
        { label: 'Others', value: '#2BA7DA', active: false }
    ];

    public addSeries(button, toggleLabels) {
        if (toggleLabels) {
            this.seriesColors.forEach(s => {
                if (s.value === button.value) {
                    s.active = !s.active;
                }
            });
        }

        const newSeries = {
            color: this.seriesColors.filter(color => color.label === button.label)[0].value,
            markers: { visible: false },
            data: this.data[button.label]
        };

        const present = this.visibleSeries.some(series => series.color === newSeries.color);
        if (present) {
            const removeIndex = this.visibleSeries.map(item => item.color).indexOf(newSeries.color);
            // tslint:disable: no-unused-expression
            // tslint:disable: no-bitwise
            ~removeIndex && this.visibleSeries.splice(removeIndex, 1);
        } else {
            this.visibleSeries.push(newSeries);
        }
        this.series = this.visibleSeries;
    }

    public ngOnInit() {
        this.addSeries({ label: 'SEV: Low', value: '#FF9966', active: false }, true);
        this.addSeries({ label: 'Enhancement', value: '#22C85D', active: false }, true);
        this.addSeries({ label: 'Others', value: '#2BA7DA', active: false }, true);
    }

    public ngOnChanges(changes) {
        if (changes.data.previousValue && changes.data.previousValue.hasOwnProperty('Others')) {
            this.visibleSeries = [];
            this.addSeries({ label: 'SEV: Low', value: '#FF9966', active: false }, false);
            this.addSeries({ label: 'Enhancement', value: '#22C85D', active: false }, false);
            this.addSeries({ label: 'Others', value: '#2BA7DA', active: false }, false);
        }
    }
}
