# Kendo UI for Angular Sample Projects: Integrating the Grid with SignalR

This sample project demonstrates how to use an editable [Grid](https://www.telerik.com/kendo-angular-ui/components/grid/) with [SignalR](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr) and is based on the following GitHub repository and Egghead lesson:
* [https://github.com/FabianGosebrink/egghead-consuming-signalr-values-in-an-angular-application](https://github.com/FabianGosebrink/egghead-consuming-signalr-values-in-an-angular-application)
* [Consume ASP.NET Core SignalR values in an Angular Application](https://egghead.io/lessons/angular-consume-asp-net-core-signalr-values-in-an-angular-application)

The demo is referred to in the [Kendo UI for Angular official documentation](https://www.telerik.com/kendo-angular-ui/components) in the article on [consuming SignalR events](https://www.telerik.com/kendo-angular-ui/components/grid/how-to/consume-signalr-in-grid/).

## Getting Started

1. Clone this repository by using your favorite Git client or by executing `git clone https://github.com/telerik/kendo-angular.git`.
1. Enter the examples directory by running `cd examples`.
1. Run `npm install` to install the project dependencies.
1. Enter the project directory by running `cd projects/grid-signalr`.
1. In a separate terminal window, setup and run the Server as outlined in the following section.
1. Run `ng serve grid-signalr`.
1. Open http://localhost:4200 in two browser tabs.

> The updates are synchronized in real-time by using the SignalR server.

## Setting Up the Server

The `server` folder contains a SignalR server which is implemented with .NET Core.

To start the server:

1. Install [.NET Core Runtime](https://dotnet.microsoft.com/download).
1. Execute `dotnet run` in the `server` folder.
