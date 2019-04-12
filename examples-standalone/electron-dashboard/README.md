[<img src="./logo-kendo.png" width="225" />](https://www.telerik.com/kendo-angular-ui/) [![Angular Logo](./logo-angular.jpg)](https://angular.io/) [![Electron Logo](./logo-electron.jpg)](https://electron.atom.io/)

# Using the Suite with Electron

This Kendo UI for Angular sample project demonstrates how to use [Kendo UI for Angular components](https://www.telerik.com/kendo-angular-ui/components) in an Electron Desktop application and is based on the https://github.com/maximegris/angular-electron Electron and Angular integration project.

## In This Article

* [Setting Up the Project](#setting-up-the-project)
* [Getting Started](#getting-started)
* [Building for Development](building-for-development)
* [Managing Your Environment Variables](#managing-your-environment-variables)
* [Included Commands](#included-commands)
* [Browser Mode](#vbrowser-mode)
* [Copyright Notice by maximegris/angular-electron](#copyright-notice-by-maximegrisangular-electron)

## Setting Up the Project

Bootstrap and package your project with Angular 5 or later and Electron (Typescript, SASS, and Hot Reload) for creating Desktop applications.

Currently, the sample projects runs with:
- Angular v5.2.5
- Angular-CLI v1.6.4
- Electron v1.8.6
- Electron Builder v20.0.4

With this sample project, you can:
- Run your application in a local development environment with Electron and Hot Reload.
- Run your application in a production environment.
- Package your application into an executable file for Linux, Windows, and Mac.

## Getting Started

1. Clone the repository of the sample application locally by running `git clone https://github.com/telerik/kendo-angular/.git`.
1. Navigate to the project folder by running `cd examples-standalone/kendo-angular-electron-dashboard`.
1. Install dependencies with NPM by running `npm install`.

  > * An issue occurs when `yarn` and `node_modules` are only used in Electron on the backend when the application is built by the packager. To work around the problem, use `npm` as your dependency manager.
  > * To generate Angular components with Angular-CLI, you have to install `@angular/cli` in an NPM global context. Run `npm install -g @angular/cli`. If you had installed an earlier version of `angular-cli`, follow the instruction in the [Angular-CLI documentation](https://github.com/angular/angular-cli) .

## Building for Development

In the terminal window, run `npm start`. Voila! You can use your Angular and Electron application in a local development environment with hot reload!

The application code is managed by `main.ts`. In this sample project, the application runs with a simple Angular Application (http://localhost:4200) and an Electron window. The Angular component contains an example of Electron and NodeJS native lib import. You can deactivate **Developer Tools** by commenting `win.webContents.openDevTools();` in `main.ts`.

## Managing Your Environment Variables

- To use local variables, run `npm start` or `cross-env ENV=local npm start`.
- To use development variables, run `cross-env ENV=dev npm start`.
- To use production variables, run `cross-env ENV=rod npm start`.

## Browser Mode

To execute the application in the browser (WITHOUT HOT RELOAD ACTUALLY...), you can run `npm run ng:serve`. Note that you cannot use Electron or NodeJS native libraries in this case. To watch how conditional import of Electron and Native libraries is done, refer to `providers/electron.service.ts` .

## Copyright Notice by maximegris/angular-electron

Copyright 2017 - Maxime GRIS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
