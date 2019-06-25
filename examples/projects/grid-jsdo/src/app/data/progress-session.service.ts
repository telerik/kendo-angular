import { Injectable } from '@angular/core';
import { progress } from '@progress/jsdo-core';
import { map } from 'rxjs/operators';
import { DataProviderService } from './service-config';

import { Observable, throwError, from, of } from 'rxjs';


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
            return throwError(new Error(`Error creating JSDO session. Unknown data provider: ${providerName}`));
        }

        if (this.createdSessions[providerName]) {
            return of(this.createdSessions[providerName]);
        }

        return from(progress.data.getSession({
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
