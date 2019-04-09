## Grid Integration with SignalR
## Kendo UI for Angular

This application shows an example of how one can use editable Kendo UI for Angular Grid with GraphQL queries.

For more details, refer to the article on [Consuming SignalR Events](https://www.telerik.com/kendo-angular-ui/components/grid/how-to/consume-signalr-in-grid/).

Based on the following GitHub repository and Egghead lesson:
* [https://github.com/FabianGosebrink/egghead-consuming-signalr-values-in-an-angular-application](https://github.com/FabianGosebrink/egghead-consuming-signalr-values-in-an-angular-application)
* [Consume ASP.NET Core SignalR values in an Angular Application](https://egghead.io/lessons/angular-consume-asp-net-core-signalr-values-in-an-angular-application)

## Get Started

1. Clone this repository by using your favorite Git client or by executing `git clone https://github.com/telerik/kendo-angular.git`.
1. Enter the examples directory by running `cd examples`.
1. Run `npm install` to install the project dependencies.
1. Enter the project directory by running `cd projects/grid-signalr`.
1. In a separate terminal window, setup and run the Server as outlined in the section below.
1. Run `ng serve grid-signalr`
1. Open http://localhost:4200 in two browser tabs
1. Notice updates are synchronized in real-time using the SignalR server

### Server setup

The `server` folder contains a SignalR server implemented with .NET Core. To start it, execute:

1. Install [.NET Core Runtime](https://dotnet.microsoft.com/download)
1. Execute `dotnet run` in the "server" folder.
