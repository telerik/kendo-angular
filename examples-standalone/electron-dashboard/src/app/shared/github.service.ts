import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';

// Replace with a personal access token to access your repositories.
// See https://github.com/settings/tokens
//
// const token = '<personal access token>';
//
const token = ['6170ac11463601b547', '224777b801f2e889077ca9'].join('');

@Injectable()
export class GithubService {
    private headers = new HttpHeaders({
        // Generate your own token through
        // https://github.com/settings/tokens

        'Authorization': `token ${token}`
    });
    constructor(public http: HttpClient) { }

    getGithubIssues(pages) {
        return forkJoin(this.getIssuesUrls(pages));
    }

    getTotalIssuesCount(){
        return this.http.get(`${baseUrl}?since='2018-01-01T00:00:00'`, { headers: this.headers })
            .pipe(map(this.handleResponse))
    }

    getIssuesUrls({ pages }) {
        const result = [];
        for (let index = 1; index < pages; index++) {
            result.push(
                this.http.get(`${baseUrl}?state=all&page=${index}&per_page=100`, { headers: this.headers })
                    .pipe(map(this.handleResponse))
            );
        }
        return result;
    }
    getIssuesPerPage(skip, take) {
        let page = (take + skip) / take;

        return this.http.get(`${baseUrl}?state=all&page=${page}&per_page=${take}`, { headers: this.headers })
            .pipe(map(this.handleResponse));
    }

    getGithubUser(username) {
        return this.http.get(`https://api.github.com/users/${username}`, { headers: this.headers })
            .pipe(map(this.handleResponse));
    }

    getGithubIssue(id: number) {
        return this.http.get(`${baseUrl}/${id}`, { headers: this.headers })
            .pipe(map(this.handleResponse));
    }

    handleResponse(res: HttpResponse<any>): HttpResponse<any> {
        return res;
    }
}
