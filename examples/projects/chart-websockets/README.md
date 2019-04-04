# Kendo UI Charts - Real-time updates with the WebSocket API

This repository holds the source code for the article on [using Kendo UI for Angular Charts with WebSockets](https://www.telerik.com/kendo-angular-ui/components/charts/how-to/bind-to-websockets/).

## Get Started

1. Clone this repository by using your favorite Git client or by executing `git clone https://github.com/telerik/kendo-angular.git`.
1. Enter the examples directory by running `cd examples`.
1. Run `npm install` to install the project dependencies.
1. Enter the project directory by running `cd projects/chart-websockets`.

### Server setup

The `server` folder contains a WebSocket server implemented with Express. To start it, execute:

```bash
cd server
npm install
npm start
```

### Client setup

Ensure that the server is running before starting the client application.

1. `ng serve chart-websockets`
1. Open http://localhost:4200
