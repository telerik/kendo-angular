# Using the Suite with Progressive Web Applications

This Kendo UI for Angular sample project demonstrates how to use [Kendo UI for Angular components](https://www.telerik.com/kendo-angular-ui/components) with Progressive Web Applications (PWA) and is based on the [official Angular implementation of a service worker](https://angular.io/guide/service-worker-getting-started).

## Getting Started

1. Clone this repository by using your favorite Git client or by executing `git clone https://github.com/telerik/kendo-angular.git`.
1. Enter the project directory by running `cd examples/projects/integration-pwa`.
1. Install the node modules by running `npm install`.

## Running the Application

> A copy of the application is deployed at [https://telerik.github.io/kendo-angular/integration-pwa/](https://telerik.github.io/kendo-angular/integration-pwa/).

1. Build the application in production mode to be able to access the service worker.
1. Access the service worker by running `ng build integration-pwa --configuration production`.
2. Enter the newly created `dist` folder by running `cd dist/integration-pwa`.
3. Run the server in a disabled cache mode by running `npx http-server -c -1`.

## Further Help

Creating a new project with `ng new my-project --service-worker` will create a default `ngsw-config.json` configuration file of the service worker. You can further modify this file. For example, you can specify which local assets and data that are received from the `http` requests which hit particular domains will be cached. For more information on the available configuration settings of the `ngsw-config.json` file, refer to the article on <a href="https://angular.io/guide/service-worker-config">Service Worker configuration</a>.

You can also create a `manifest.json` file that is used to tell the device which is running the application how to display it on its home screen. For more information on setting up and configuring the `manifest.json` file, refer to <a href="https://developers.google.com/web/fundamentals/web-app-manifest/?utm_source=devtools">The Web App Manifest</a> article.

Once the application is up and running in production mode:

1. Check its functionality by inspecting the **Application** tab of the browser console.

    ![Service Worker](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/sw.png)

1. Check the **Offline** option so you can check the offline functionality of the application.

    ![Offline](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/offline.png)

1. Inspect the cached local assets.

    ![Local assets](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/cached_local.png)

1. Inspect the cached remote assets.

    ![Remote assets](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/cached_remote.png)

1. Add the application to the home screen.

    ![Add to home screen](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/add_to_home.png)

1. Confirm.

    ![Confirm](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/confirm.png)

As a result, you will see the application icon on your desktop and in the browser dashboard.

![Browser dashboard](https://github.com/telerik/kendo-angular-pwa/blob/master/src/assets/help_images/dashboard.png)
