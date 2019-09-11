import { Component, Input } from '@angular/core';
import { IssueTypesComponent } from '../charts/issue-types.component';
import { TypesDistributionComponent } from '../charts/types-distribution.component';
import { ActiveIssuesComponent } from '../charts/active-issues.component';

@Component({
    selector: 'app-statistics',
    template: `
        <div class="row">
            <div class="col-md-12">
                <div *ngIf="loading" class="card" style="height: 400px">
                    <app-loading-spinner>
                    </app-loading-spinner>
                </div>
                <app-active-issues
                    *ngIf="!loading && issues.active.length"
                    [data]="issues.groupedIssues"
                    [months]="months"
                    [issues]="issues"
                    [closeRate]="issues.closeRate.average"
                    [active]="issues.active"></app-active-issues>
            </div>
            <div *ngIf="!loading && issues.active.length" class="col-md-4">
                <app-issue-types [data]="issues.issueTypes"></app-issue-types>
            </div>
            <div *ngIf="!loading && issues.active.length" class="col-md-8">
                <app-types-distribution [data]="issues.typesDistribution" [months]="months" *ngIf="issues.active.length">
                </app-types-distribution>
            </div>
        </div>

    `
})
export class StatisticsComponent {
    @Input() public issues;
    @Input() public months;
    @Input() public loading;
}
