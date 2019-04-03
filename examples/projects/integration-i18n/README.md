# Kendo UI for Angular: Internationalization

This repository contains a sample application which demonstrates how to translate the built-in messages of the Kendo UI for Angular components.

For more details, refer to the article on [localization](http://www.telerik.com/kendo-angular-ui/components/localization/).

## Get Started

1. Clone this repository by using your favorite Git client or by executing `git clone https://github.com/telerik/kendo-angular.git`.
1. Enter the examples directory by running `cd examples`.
1. Run `npm install` to install the project dependencies.
1. Enter the project directory by running `cd projects/integration-i18n`.

## Table of Contents

* [Extracting Messages](#extracting-messages)
* [Translating Messages](#translating-messages)
* [Running the Application](#running-the-application)
* [Original Angular CLI Documentation](#original-angular-cli-documentation)
    * [Development Server](#development-server)
    * [Code Scaffolding](#code-scaffolding)
    * [Builds](#builds)
    * [Unit Tests](#unit-tests)
    * [End-to-End Tests](#end-to-end-tests)
    * [Further Help](#further-help)
* [Other Kendo UI Sample Projects for Angular](#other-kendo-ui-sample-projects-for-angular)

## Extracting Messages

To extract the application messages in `src/locale/messages.xlf`, run:

* For standalone projects:

  `ng xi18n --i18n-format=xliff --out-file=src/locale/messages.xlf`

* For multi-project workspaces, like this sample, specify the project name:

  `ng xi18n integration-i18n  --i18n-format=xliff --out-file=src/locale/messages.xlf`

## Translating Messages

To automatically translate Kendo UI component messages, run:

`npx kendo-translate src/locale/messages.es.xlf --locale es-ES`

## Running the Application

To run your application with the `es-ES` locale, run:

* For standalone projects:

  `ng serve --configuration=es`

* For multi-project workspaces, like this sample, specify the project name:

  `ng serve integration-i18n --configuration=es`

## Other Kendo UI Sample Projects for Angular

|Sample Project Repository                                        |Sample Project Documentation |
|:---                                                             |:---                         |
|[Using Kendo UI with the Angular CLI](https://github.com/telerik/kendo-angular-quickstart-cli) |[Get Started](http://www.telerik.com/kendo-angular-ui/getting-started/)|
|[Using Kendo UI for Angular with Angular QuickStart](https://github.com/telerik/kendo-angular-quickstart) |[Using with SystemJS](http://www.telerik.com/kendo-angular-ui/components/installation/system-js/)|
|[Using Kendo UI for Angular with Angular Seed](https://github.com/telerik/kendo-angular-quickstart-seed)  |Not documented        |
|[Using Kendo UI for Angular with Angular Universal](https://github.com/telerik/kendo-angular-universal-demo) |[Universal Rendering](http://www.telerik.com/kendo-angular-ui/components/framework/universal/)|
|[Using Kendo UI for Angular with UI for ASP.NET Core](https://github.com/telerik/kendo-angular-demo-aspnetcore-data/tree/master) |[UI for ASP.NET Core Integration](http://www.telerik.com/kendo-angular-ui/components/dataquery/mvc-integration/)|
|[Using Kendo UI for Angular with NativeScript](https://github.com/telerik/ng2-dashboard)                     |Not documented   |
