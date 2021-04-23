[<img src="./logo-kendo.png" width="225" />](https://www.telerik.com/kendo-angular-ui/) [![Angular Logo](./logo-angular.jpg)](https://angular.io/) [![Electron Logo](./logo-electron.jpg)](https://electron.atom.io/)

# Using the Suite with Electron

This Kendo UI for Angular sample project demonstrates how to use [Kendo UI for Angular components](https://www.telerik.com/kendo-angular-ui/components) in an Electron Desktop application and is based on the https://github.com/maximegris/angular-electron Electron and Angular integration project.

## In This Article

* [Setting Up the Project](#setting-up-the-project)
* [Getting Started](#getting-started)
* [Building for Development](#to-build-for-development)
* [Included Commands](#included-commands)
* [Debug with VsCode](#debug-with-vscode)
* [E2E Testing](#e2e-testing)

## Setting Up the Project

Bootstrap and package your project with Angular 5 or later and Electron (Typescript, SASS, and Hot Reload) for creating Desktop applications.

Currently, the sample projects runs with:
- Angular v11.2.8
- Electron v12.0.2
- Electron Builder v22.10.5

With this sample project, you can:
- Run your application in a local development environment with Electron and Hot Reload.
- Run your application in a production environment.
- Package your application into an executable file for Linux, Windows, and Mac.

## Getting Started

1. Clone the repository of the sample application locally by running `git clone https://github.com/telerik/kendo-angular/`.
1. Navigate to the project folder by running `cd examples-standalone/electron-dashboard`.
1. Install dependencies with NPM by running `npm install`.

There is an issue with `yarn` and `node_modules` when the application is built by the packager. Please use `npm` as dependencies manager.


If you want to generate Angular components with Angular-cli , you **MUST** install `@angular/cli` in npm global context.
Please follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of `angular-cli`.

``` bash
npm install -g @angular/cli
```
## To build for development

- **in a terminal window** -> npm start

Voila! You can use your Angular + Electron app in a local development environment with hot reload!

The application code is managed by `main.ts`. In this sample, the app runs with a simple Angular App (http://localhost:4200) and an Electron window.
The Angular component contains an example of Electron and NodeJS native lib import.
You can disable "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.ts`.

## Use Electron / NodeJS libraries

This sample project runs in both modes (web and electron). To make this work, **you have to import your dependencies the right way**. Please check `providers/electron.service.ts` to watch how conditional import of libraries has to be done when using electron / NodeJS / 3rd party libraries in renderer context (i.e. Angular).

## Use "web" 3rd party libraries (like angular, material, bootstrap, ...)

3rd party librairies used in electron's renderer process (like angular) have to be added in `devDependencies` of `package.json`. They are already added in your final package during webpack's compilation phase. Otherwise it will significantly increase the size of your final package... not so cool :(

## Browser mode

Maybe you only want to execute the application in the browser with hot reload? Just run `npm run ng:serve:web`.

## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:build`| Builds your application and creates an app consumable based on your operating system |

**Your application is optimised. Only /dist folder and node dependencies are included in the executable.**

## You want to use a specific lib (like rxjs) in electron main thread ?

YES! You can do it! Just by importing your library in npm dependencies section (not **devDependencies**) with `npm install --save`. It will be loaded by electron during build phase and added to your final package. Then use your library by importing it in `main.ts` file. Quite simple, isn't it?

## Debug with VsCode

[VsCode](https://code.visualstudio.com/) debug configuration is available! In order to use it, you need the extension [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome).

Then set some breakpoints in your application's source code.

Finally from VsCode press **Ctrl+Shift+D** and select **Application Debug** and press **F5**.

Please note that Hot reload is only available in Renderer process.

## E2E Testing

E2E Test scripts can be found in `e2e` folder.

|Command|Description|
|--|--|
|`npm run e2e`| Execute end to end tests |

Note: To make it work behind a proxy, you can add this proxy exception in your terminal  
`export {no_proxy,NO_PROXY}="127.0.0.1,localhost"`
