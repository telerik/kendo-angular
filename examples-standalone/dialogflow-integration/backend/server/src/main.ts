import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as session from 'express-session';
import { processResponse } from './process-response';
import { sessionContext } from './session-context';
import * as config from '../config.json';

const app = express();

app.use(cors({
    origin: config.allowOrigin,
    credentials: true
}));
 
app.use(session({
    secret: config.cookieSecret,
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.text({ type: 'text/plain', limit: config.maxBodySize }));

app.post('/sessions/event', (req, res, next) => {
    // Retrieve session
    const { sessionClient, sessionPath } = sessionContext(req);

    // The event query request.
    sessionClient.detectIntent({
        session: sessionPath,
        queryInput: {
            event: {
                name: req.body,
                languageCode: config.languageCode
            }
        },
    }).then(value => {
        res.send(processResponse(value));
    }).catch(error => {
        next(error);
    });
});

app.post('/sessions/text', (req, res, next) => {
    // Retrieve session
    const { sessionClient, sessionPath } = sessionContext(req);

    // The text query request.
    sessionClient.detectIntent({
        session: sessionPath,
        queryInput: {
            text: {
                text: req.body,
                languageCode: config.languageCode
            }
        },
    }).then(value => {
        res.send(processResponse(value));
    }).catch(error => {
        next(error);
    });
});

app.listen(config.listenPort, () => {
    console.log('DialogFlow proxy now listening on port ' + config.listenPort);
});
