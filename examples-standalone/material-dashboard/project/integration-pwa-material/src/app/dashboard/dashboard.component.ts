import { Component, ViewEncapsulation, HostBinding, OnDestroy } from '@angular/core';
import { GithubService } from './../shared/github.service';
import { IssuesProcessor } from './../shared/issues-processor.service';
import { IssuesModel } from './../shared/issues.model';

import 'hammerjs';
import { Subscription, of, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-dashboard',
    providers: [GithubService, IssuesProcessor],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dashboard.template.html'
})
export class DashboardComponent implements OnDestroy {
    public isLoading = true;
    public today: Date = new Date();
    public rangeStart: Date;
    public issues: any;
    public months = 3;
    private data: any;
    private subscription: Subscription;
    private selectedIndex = 0;

    @HostBinding('attr.id') get get_id() { return 'dashboard'; }
    @HostBinding('class') get get_class() { return 'container-fluid'; }

    constructor(public githubService: GithubService, public issuesProcessor: IssuesProcessor) {
        this.rangeStart = this.issuesProcessor.getMonthsRange(this.months);

        this.subscription =
          merge(
            githubService
              .getGithubIssues({pages: 5})
              .pipe(map(data => {
                  this.data = data;
                  this.isLoading = false;
                  return this.issuesProcessor.process(data, this.months);
              }, (err) => this.isLoading = false)),
              of(new IssuesModel())
          )
          .subscribe((data: IssuesModel) => {
              this.issues = data;
          });
    }

    onFilterClick(months) {
        if (this.months !== months) {
            this.months = months;
            this.rangeStart = this.issuesProcessor.getMonthsRange(months);
            this.issues = this.issuesProcessor.process(this.data, months);
            this.filterIssues(this.selectedIndex);
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onTabSelect(event) {
        this.filterIssues(event.index);
    }

    filterIssues(index) {
        switch (index) {
            case 0 :
                this.issues = this.issuesProcessor.process(this.data, this.months);
                this.selectedIndex = 0;
                break;
            case 1 :
                const assigned = this.issuesProcessor.flatten(this.data)
                  .filter(item => item.assignee ? item.assignee.login === 'ggkrustev' : false);
                this.issues = this.issuesProcessor.process(assigned, this.months);
                this.selectedIndex = 1;
                break;
            case 2 :
                const created = this.issuesProcessor.flatten(this.data).filter(item => item.user.login === 'ggkrustev');
                this.issues = this.issuesProcessor.process(created, this.months);
                this.selectedIndex = 2;
                break;
            default : this.issues = this.issuesProcessor.process(this.data, this.months);
        }
    }
}
