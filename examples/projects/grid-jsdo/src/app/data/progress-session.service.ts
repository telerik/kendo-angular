import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';

import { progress } from '@progress/jsdo-core';

import { DataProviderService } from './service-config';

@Injectable()
export class ProgressSessionService {
    public createdSessions: { [key: string]: progress.data.JSDOSession } = {};

    constructor(protected dataProviderService: DataProviderService) { }

    public tryCreateSession(providerName: string): Observable<progress.data.JSDOSession> {
        return this.createSession(providerName, '', '');
    }

    public signIn(providerName: string, userName: string, password: string): Observable<progress.data.JSDOSession> {
        return this.createSession(providerName, userName, password);
    }

    public signOut(providerName: string): Observable<any> {
        const session = this.createdSessions[providerName];
        const result = session ? session.invalidate() : null;
        delete this.createdSessions[providerName];
        return of(result);
    }

    protected createSession(providerName: string, userName: string, password: string): Observable<progress.data.JSDOSession> {
        const dataProvider = this.dataProviderService.get(providerName);

        if (!dataProvider) {
            return _throw(new Error(`Error creating JSDO session. Unknown data provider: ${providerName}`));
        }

        if (this.createdSessions[providerName]) {
            return of(this.createdSessions[providerName]);
        }

        return fromPromise(progress.data.getSession({
            name: providerName,
            authenticationModel: dataProvider.authenticationModel,
            serviceURI: dataProvider.serviceUri,
            catalogURI: dataProvider.catalogUris[0],
            username: userName,
            password
        })).pipe(
            map((sessionResponse: { jsdosession: progress.data.JSDOSession }) => {
                this.createdSessions[providerName] = sessionResponse.jsdosession;
                return this.createdSessions[providerName];
            })
        );
    }
}
