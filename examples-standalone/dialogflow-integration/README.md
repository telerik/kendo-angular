# Using Chat component with Google Dialogflow V2

This sample project demonstrates how to use the [Kendo UI for Angular Conversational UI](https://www.telerik.com/kendo-angular-ui/components/conversationalui/) component with [Google Dialogflow V2](https://cloud.google.com/dialogflow/docs/). The project uses an Angular 9 client side application and an Express server, which communicates with the service using the [official Node.js Client](https://github.com/googleapis/nodejs-dialogflow).

The demo is referred to in the [Kendo UI for Angular official documentation](https://www.telerik.com/kendo-angular-ui/) in the article on [Integrating Dialogflow](https://www.telerik.com/kendo-angular-ui/components/conversationalui/integrations/dialogflow/).

## Getting Started

1. Clone the sample app repository locally by using your favorite Git client or by running `git clone https://github.com/telerik/kendo-angular/.git`.
1. Log into the Google Dialogflow console and [create a new agent](https://dialogflow.cloud.google.com/#/newAgent).
1. Use the ["Restore from ZIP"](https://cloud.google.com/dialogflow/docs/agents-settings#export) to import the `agent.zip` file located in the `backend` folder.
1. [Get a service account key](https://dialogflow.com/docs/reference/v2-auth-setup?authuser=2#getting_the_service_account_key) and export it as a JSON file.

    _You will need to set up a payment method for [Google Cloud Functions](https://cloud.google.com/functions/pricing). There is a generous free tier of 2 million requests, but usage is not capped._
1. Rename the key JSON file to `credentials.json` and add it to the project `backend/server` folder.
1. Deploy the Fulfillment code from the [`webhook`](./backend/webhook) using the [Inline Editor](https://cloud.google.com/dialogflow/docs/fulfillment-inline-editor).
1. Enter the project server directory `backend/server/`.
1. Run `npm ci` and `npm start` to start the server.
1. Enter the project client directory `client/`
1. Run `npm ci` and `ng serve` to start the client app.
1. Open http://localhost:4200.
