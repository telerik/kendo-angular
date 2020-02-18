# Using the Suite with Angular Universal

These Kendo UI for Angular sample projects demonstrate how to use [Kendo UI for Angular components](https://www.telerik.com/kendo-angular-ui/components) with Angular Universal.

## In This Article

* [Getting Started](#getting-started)
* [Running the Applications](#running-the-applications)
  * [Node-Based Project](#node-based-project)
  * [ASP.NET Core-Based Project](#aspnet-core-based-project)
* [Other Kendo UI Sample Projects for Angular](#other-kendo-ui-sample-projects-for-angular)

## Getting Started

1. Clone this repository by using your favorite Git client or by executing `git clone https://github.com/telerik/kendo-angular.git`.
1. Enter the project directory by running `cd kendo-angular/angular-universal`.

## Running the Applications

To run each of the sample applications, follow the listed commands in each section.

### Node-Based Project

To run the Node-based application, execute the following commands.

```
# use npm to install the dependencies
npm install

# a) Build and run the application with Server-Side Rendering
npm run build:ssr
npm run serve:ssr

# b) Run the application in development mode
ng serve
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
