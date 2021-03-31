import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';
const epoch = '2018-01-01T00:00:00';

// Replace with a personal access token to access your repositories.
// See https://github.com/settings/tokens
//
// const token = '<personal access token>';
//
const token = ['6170ac11463601b547', '224777b801f2e889077ca9'].join('');

const headers = new HttpHeaders({
  Authorization: `token ${token}`
});

@Injectable()
export class GithubService {
    constructor(public http: HttpClient) { }

    getGithubIssues(pages) {
        return forkJoin(this.getIssuesUrls(pages));
    }

    getTotalIssuesCount() {
        return this.http.get(`${baseUrl}?since='${epoch}'`, { headers });
    }

    getIssuesUrls({ pages }) {
        const result = [];
        for (let index = 1; index < pages; index++) {
            result.push(
                this.http.get(`${baseUrl}?state=all&page=${index}&per_page=100`, { headers })
            );
        }
        return result;
    }

    getIssuesPerPage(skip: number, take: number) {
        const page = (take + skip) / take;
        return this.http.get(`${baseUrl}?state=all&page=${page}&per_page=${take}`, { headers });
    }

    getGithubUser(username: string) {
        return this.http.get(`https://api.github.com/users/${username}`, { headers });
    }

    getGithubIssue(id: number) {
        return this.http.get(`${baseUrl}/${id}`, { headers });
    }
}
