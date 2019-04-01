# Kendo UI for Angular - Progressive Web Application

This repository demonstrates a PWA based on the <a href="https://angular.io/guide/service-worker-getting-started">official Angular implementation of a service worker</a>.

## Get Started

1. Clone this repository by using your favorite Git client or by executing ```git clone https://github.com/telerik/kendo-angular.git```.
1. Enter the project directory by running ```cd examples/projects```.
1. Install the node modules by running ```npm install```.

## Running the Application

1. We need to build the application in production mode so that we have the service worker available by running ```ng build integration-pwa --prod```.
2. Enter the newly created dist folder by running ```cd dist/integration-pwa```.
3. Run the server in a disabled cache mode by running ```npx http-server -c -1```.

## Further help

Creating a new project via ```ng new my-project --service-worker``` will create a default config file of the service worker - <b>ngsw-config.json</b>. We can further modify this file. For example we can specify which local assets and data received from http requets, hitting particular domains, to be cached. For more details about the available configuration settings of the ngsw-config.json file check the following article:

<a href="https://angular.io/guide/service-worker-config">Service Worker Configuration</a>

We can also create a <b>manifest.json</b> file that is used to tell the device running the application how to display it on its home screen. For more details sbout setting up and configuring the manifest.json file check the following article:

<a href="https://developers.google.com/web/fundamentals/web-app-manifest/?utm_source=devtools">The Web App Manifest</a>

Once the application is up and running in prod mode, we can check its functionality by inspecting the Application tab of the browser's console:
![Service Worker](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/sw.png)

We can then check the "Offline" option in order to check the offline functionality of the app:
![Offline](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/offline.png)

We can inspect the cached local assets:
![Local assets](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/cached_local.png)

And the cached remote assets:
![Remote assets](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/cached_remote.png)

Add the app to the home screen:
![Add to home screen](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/add_to_home.png)

Confirm:
![Confirm](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/confirm.png)

Now, we will see the app's icon on our desktop and in the browser's dashboard:
![Browser dashboard](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/dashboard.png)



