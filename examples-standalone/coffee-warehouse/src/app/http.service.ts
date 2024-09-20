import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private http: HttpClient) { }

    public get(url: string): Observable<any> {
        return this.http.get(url);
    }

    public post(url: string, payload: any): Observable<any> {
        return this.http.post(url, payload);
    }
}

