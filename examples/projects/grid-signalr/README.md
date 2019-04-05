## Consume ASP.NET Core SignalR values in a Kendo UI for Angular Grid within an Angular Application

# Kendo UI for Angular - Grid Integration with SignalR

This application shows an example of how one can use editable Kendo UI for Angular Grid with GraphQL queries.

Based on the following GitHub repository and Egghead lesson:
* [https://github.com/FabianGosebrink/egghead-consuming-signalr-values-in-an-angular-application](https://github.com/FabianGosebrink/egghead-consuming-signalr-values-in-an-angular-application)
* [Consume ASP.NET Core SignalR values in an Angular Application](https://egghead.io/lessons/angular-consume-asp-net-core-signalr-values-in-an-angular-application)

## Get Started

1. Clone this repository by using your favorite Git client or by executing `git clone https://github.com/telerik/kendo-angular.git`.
1. Enter the examples directory by running `cd examples`.
1. Run `npm install` to install the project dependencies.
1. Enter the project directory by running `cd projects/grid-signalr`.

### Server setup

The `server` folder contains a SignalR server implemented with .NET Core. To start it, execute:

1. Install [.NET Core Runtime](https://dotnet.microsoft.com/download)
1. Execute `dotnet run` in the "server" folder.

### Client setup

Ensure that the server is running before starting the client application.

1. `ng serve grid-signalr`
1. Open http://localhost:4200 in two browser tabs
1. Notice updates are synchronized in real-time using the SignalR server
