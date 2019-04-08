# Kendo UI for Angular: Angular Universal

This repository contains a Node-based and an ASP.NET Core-based sample applications which demonstrate how to use Kendo UI for Angular and Angular Universal.

## Get Started

1. Clone this repository by using your favorite Git client or by executing `git clone https://github.com/telerik/kendo-angular-universal-demo.git`.
1. Enter the project directory by running `cd kendo-angular-universal-demo`.

## Table of Contents

* [Running the Applications](#running-the-applications)
    * [Node-Based Project](#node-based-project)
    * [ASP.NET Core-Based Project](#aspnet-core-based-project)
* [Other Kendo UI Sample Projects for Angular](#other-kendo-ui-sample-projects-for-angular)

## Running the Applications

### Node-Based Project

To run the application, execute the following commands:

```
# use npm (or yarn) to install the dependencies
npm install

# dev build (SPA / lean Angular)
npm run build:spa-dev
# prod build (SPA / lean Angular)
npm run build:spa-prod

# start the server (SPA / lean Angular)
npm run serve:spa
# start the server (SPA / lean Angular, with HMR support)
npm run serve:spa-hmr

# dev build (Universal)
npm run build:universal-dev
# prod build (Universal)
npm run build:universal-prod

# start the server (Angular Universal)
npm run serve
```

### ASP.NET Core-Based Project

To run the application, execute the following commands:

```
# install the ASP.NET Core packages
dotnet restore

# use npm (or yarn) to install the dependencies
cd ClientApp/
npm install

# go back to the main projects directory
cd ..
SET ASPNETCORE_Environment=Development (Windows) or export ASPNETCORE_Environment=Development (Linux, OSX)

# Start the development server
dotnet run
```

## Other Kendo UI Sample Projects for Angular

|Sample Project Repository                                        |Sample Project Documentation |
|:---                                                             |:---                         |
|[Using Kendo UI with the Angular CLI](https://github.com/telerik/kendo-angular-quickstart-cli) |[Get Started](http://www.telerik.com/kendo-angular-ui/getting-started/)|
|[Using Kendo UI for Angular with Angular QuickStart](https://github.com/telerik/kendo-angular-quickstart) |[Using with SystemJS](http://www.telerik.com/kendo-angular-ui/components/installation/system-js/)|
|[Using Kendo UI for Angular with Angular Seed](https://github.com/telerik/kendo-angular-quickstart-seed)  |Not documented        |
|[Using Kendo UI for Angular with UI for ASP.NET Core](https://github.com/telerik/kendo-angular-demo-aspnetcore-data/tree/master) |[UI for ASP.NET Core Integration](http://www.telerik.com/kendo-angular-ui/components/dataquery/mvc-integration/)|
|[Using Kendo UI for Angular with NativeScript](https://github.com/telerik/ng2-dashboard)                     |Not documented   |
|[Translating the custom messages of the Kendo UI components for Angular](https://github.com/telerik/kendo-angular-i18n-sample) |[Translation of Messages](http://www.telerik.com/kendo-angular-ui/components/localization/messages/)|
