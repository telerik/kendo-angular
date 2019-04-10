# Kendo UI for Angular Sample Projects: Using the Suite with Angular Universal

These sample projects demonstrate how to use [Kendo UI for Angular components](https://www.telerik.com/kendo-angular-ui/components) with Angular Universal.

## In This Article

* [Getting Started](#getting-started)
* [Running the Applications](#running-the-applications)
  * [Node-Based Project](#node-based-project)
  * [ASP.NET Core-Based Project](#aspnet-core-based-project)
* [Other Kendo UI Sample Projects for Angular](#other-kendo-ui-sample-projects-for-angular)

## Getting Started

1. Clone this repository by using your favorite Git client or by executing `git clone https://github.com/telerik/kendo-angular-universal-demo.git`.
1. Enter the project directory by running `cd kendo-angular-universal-demo`.

## Running the Applications

To run each of the sample applications, follow the listed commands in each section.

### Node-Based Project

To run the Node-based application, execute the following commands.

```
# use npm (or yarn) to install the dependencies
npm install

# Development build (SPA / lean Angular).
npm run build:spa-dev
# Production build (SPA / lean Angular).
npm run build:spa-prod

# Start the server (SPA / lean Angular).
npm run serve:spa
# Start the server (SPA / lean Angular, with HMR support).
npm run serve:spa-hmr

# Development build (Universal).
npm run build:universal-dev
# Production build (Universal).
npm run build:universal-prod

# Start the server (Angular Universal).
npm run serve
```

### ASP.NET Core-Based Project

To run the ASP.NET Core-based application, execute the following commands.

```
# Install the ASP.NET Core packages.
dotnet restore

# Use npm (or yarn) to install the dependencies.
cd ClientApp/
npm install

# Go back to the main projects directory.
cd ..
SET ASPNETCORE_Environment=Development (Windows) or export ASPNETCORE_Environment=Development (Linux, OSX)

# Start the development server.
dotnet run
```
