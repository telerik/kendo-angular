import * as dialogflow from '@google-cloud/dialogflow';
import { v4 as uuid } from 'uuid';
import * as config from '../config.json';
import * as credentials from '../credentials.json';

type SessionsClient = dialogflow.v2.SessionsClient;

export interface SessionContext {
    sessionClient: SessionsClient,
    sessionPath: string
}

const clientCache = new Map<string, SessionsClient>();

export function sessionContext(req): SessionContext {
    // Set up DialogFlow Session ID and store it in the session storage
    let sessionId = req.session.dialogflowSessionId;
    if (!sessionId) {
        sessionId = uuid();
        req.session.dialogflowSessionId = sessionId;
    }

    // Reuse the existing connection for this session, if any.
    let sessionClient = clientCache.get(sessionId);
    if (!sessionClient) {
        sessionClient = new dialogflow.SessionsClient({ credentials });
        clientCache.set(sessionId, sessionClient);
    }

    // Disconnect old clients.
    if (clientCache.size > config.maxSessions) {
        const keys = clientCache.keys();
        const firstKey = keys.next().value;
        const firstClient = clientCache.get(firstKey);
        clientCache.delete(firstKey);

        // Note that the DialogFlow service maintains the session state.
        // The conversation will resume after reconnecting.
        firstClient.close();
    }

    const sessionPath = sessionClient.projectAgentSessionPath(credentials.project_id, sessionId);

    return { sessionClient, sessionPath };
}
