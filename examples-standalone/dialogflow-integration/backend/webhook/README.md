# Dialogflow: Webhook Template using Node.js and Cloud Functions for Firebase

## Setup Instructions

1. Go to the Dialogflow console and select *Fulfillment* from the left navigation menu.
3. Enable *Inline Editor*, paste the code from `functions/index.js`, then click *Deploy*.
4. Select *Intents* from the left navigation menu. Select the `Default Welcome Intent` intent, scroll down to the end of the page and click *Fulfillment*, check *Use webhook* and then click *Save*. This will allow you to have the welcome intent be a basic webhook intent to test.
5. Build out your agent and business logic by adding function handlers for Dialogflow actions.

## Development

To develop fulfillment functions, use the [Firebase CLI](https://firebase.google.com/docs/cli).

The CLI allows you to create new functions, test them locally and manage deployments.

