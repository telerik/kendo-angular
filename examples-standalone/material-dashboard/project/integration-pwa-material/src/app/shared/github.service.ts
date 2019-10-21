import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';
const token = 'b95116792cba5a8169a1ec10640d8c16535c6419';
const epoch = '2018-01-01T00:00:00';

const headers = new HttpHeaders({
  // Generate your own token through
  // https://github.com/settings/tokens

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
