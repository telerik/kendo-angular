export class IssuesModel {
    constructor(
        public active: Array<Issue> = [],
        public open = 0,
        public closed = 0,
        public groupedIssues = {
            open: [],
            closed: []
        },
        public issueTypes = [],
        public typesDistribution = {
            Enhancement: [],
            Others: [],
            'SEV: Low': [],
            'SEV: Medium': [],
            'SEV: High': [],
            Feature: []
        },
        public closeRate = {
            lowest: {
                close_rate: 0,
                created_at: new Date().toISOString()
            },
            highest: {
                close_rate: 0,
                created_at: new Date().toISOString()
            },
            average: 0
        }) { }
}

export interface Label {
    name: string;
    color: string;
}

export interface User {
    id: string;
    name: string;
    avatarUrl: string;
    avatarUrlThumb: string;
}
export interface Milestone {
    title: string;
}
export interface Issue {
    id: string;
    title: string;
    body: string;
    author: User;
    assignees: Array<User>;
    milestone?: Milestone;
    state: string;
    date: Date;
    dateClosed?: Date;
    count: number;
    created_at: string;
    labels: Array<Label>;
    assignee: string;
}
