import { Injectable } from '@angular/core';
import { IssuesModel, Issue, Label, User } from './issues.model';

const colors = {
  'SEV: LOW': '#ff9800',
  'SEV: MEDIUM': '#ff5d2a',
  'SEV: HIGH': '#d50000',
  'ENHANCEMENT': '#00c853',
  'FEATURE': '#2e7d32',
  'OTHER': '#1ca8dd',
  'PASSED QA': '#57b45b',
  'BUG': '#cf3257',
  'NEEDS QA': '#bc007c',
  'DOCUMENTATION': '#455a64',
  'DEMO': '#673ab7',
  'DELETED': '#f44336',
  'IN PROGRESS': '#ffd600'
};

@Injectable()
export class IssuesProcessor {
  static mapIssues(data: Array<any>): Array<Issue> {
    return data
      .reduce<Array<any>>((agg: Array<any>, curr: Array<any>) => [...agg, ...curr], [])
      .filter(issue => !issue.pull_request)
      .map(IssuesProcessor.mapIssue);
  }

  static mapIssue(issue: any): Issue {
    return {
      id: issue.number,
      title: issue.title,
      body: issue.body,
      author: IssuesProcessor.mapUser(issue.user),
      assignees: (issue.assignees ? issue.assignees.map(IssuesProcessor.mapUser) : []),
      state: issue.state,
      date: new Date(issue.created_at),
      dateClosed: (issue.closed_at ? new Date(issue.closed_at) : undefined),
      count: 1,
      labels: issue.labels.map(IssuesProcessor.mapLabels),
      milestone: issue.milestone,
      created_at: issue.created_at,
      assignee: issue.assignee ? issue.assignee.login : 'none'
    };
  }

  static mapLabels(label: Label) {
    const name = label.name.toUpperCase();
    if (name in colors) {
      label.color = colors[name];
    } else {
      label.color = colors["OTHER"];
    }
    return label;
  }

  static mapUser(user: any): User {
    return {
      id: user.id,
      name: user.login,
      avatarUrl: user.avatar_url,
      avatarUrlThumb: user.avatar_url + "&size=60"
    };
  }

  process(data, months) {
    const mappedIssues = this.filterByMonth(IssuesProcessor.mapIssues(data), months);
    const groupedIssues = this.groupIssues(mappedIssues);

    return new IssuesModel(
      mappedIssues,
      groupedIssues.open.length,
      groupedIssues.closed.length,
      groupedIssues,
      this.groupLabels(mappedIssues),
      this.distribution(mappedIssues),
      this.closeRate(groupedIssues));
  }

  flatten(data) {
    return data.reduce((agg, curr) => agg.concat(curr));
  }

  aggregate(data, field) {
    return data.reduce((agg, curr) => {
      agg[curr[field]] = (agg[curr[field]] || 0) + 1;
      return agg;
    }, {});
  }

  closeRate(data) {
    const closed = this.aggregate(data.closed.map(item => ({
      created_at: new Date(item.created_at).setHours(0, 0, 0, 0)
    })), 'created_at');

    const open = this.aggregate(data.open.map(item => ({
      created_at: new Date(item.created_at).setHours(0, 0, 0, 0)
    })), 'created_at');

    const rate = Object.keys(closed).map(key => {
      const closedKey = closed[key] || 0;
      const openKey = open[key] || 0;
      const closeRate = closedKey / (closedKey + openKey);
      return {
        created_at: key,
        close_rate: closeRate
      };
    });
    return {
      lowest: rate.reduce((agg, curr) => agg.close_rate < curr.close_rate ? agg : curr),
      highest: rate.reduce((agg, curr) => agg.close_rate > curr.close_rate ? agg : curr),
      average: data.closed.length / (data.open.length + data.closed.length)
    };
  }

  groupIssues(data) {
    return data.reduce((agg, curr) => {
      agg[curr.state].push(curr);
      return agg;
    }, { open: [], closed: [] });
  }

  groupLabels(data) {
    const labels = this.aggregate(this.flatten(data.map(item => item.labels)), 'name');
    const low = (labels['SEV: Low'] / data.length);
    const medium = labels['SEV: Medium'] / data.length;
    const high = labels['SEV: High'] / data.length;
    const enhancement = labels['Enhancement'] / data.length;
    const feature = labels['Feature'] / data.length;
    const other = 1 - low - medium - high - enhancement - feature;

    return [
      { type: 'SEV: LOW', value: parseFloat(low.toFixed(2)) },
      { type: 'SEV: MEDIUM', value: parseFloat(medium.toFixed(2)) },
      { type: 'SEV: HIGH', value: parseFloat(high.toFixed(2)) },
      { type: 'ENHANCEMENT', value: parseFloat(enhancement.toFixed(2)) },
      { type: 'FEATURE', value: parseFloat(feature.toFixed(2)) },
      { type: 'OTHER', value: parseFloat(other.toFixed(2)) }
    ];
  }

  distribution(data) {
    return data.map(item => ({
      created_at: new Date(item.created_at).setHours(0, 0, 0, 0),
      label: this.cleanupLabels(item.labels)
    }))
      .reduce((agg, curr) => {
        agg[curr.label].push({
          date: new Date(curr.created_at),
          value: 1
        });
        return agg;
      }, { Others: [], Enhancement: [], 'SEV: Low': [], 'SEV: Medium': [], 'SEV: High': [], 'Feature': [] });
  }

  cleanupLabels(labels: Array<Label>): string {
    let filtered = labels.filter(label =>
      label.name === 'SEV: Low' ||
      label.name === 'SEV: High' ||
      label.name === 'Feature' ||
      label.name === 'Enhancement' ||
      label.name === 'SEV: Medium')
      .map(label => label.name);
    return filtered.length === 0 ? 'Others' : filtered[0];
  }

  filterByMonth(data: Array<Issue>, months): Array<Issue> {
    return data.filter(value => {
      return new Date(value.created_at).getTime() > this.getMonthsRange(months).getTime();
    });
  }

  filterByUsername(data, username) {
    return this.process(data, 12).active.filter(value => {
      return value.assignee === username;
    });
  };

  getMonthsRange(months): Date {
    let since = new Date();
    since.setMonth(since.getMonth() - months);
    return since;
  }
}
