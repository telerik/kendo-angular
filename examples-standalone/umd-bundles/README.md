# Kendo UI for Angular - UMD Bundles
Sample application for loading [Kendo UI for Angular](https://github.com/telerik/kendo-angular) as external scripts via Webpack.

### Future of UMD bundles
Angular is removing UMD bundles with the full transition to Ivy in Angular v13.

You should consider [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/) for sharing scripts between applications.
See [Microfrontend with Angular and Webpack Module Federation](https://www.steffendielmann.com/2021/05/07/microfrontend-with-angular-and-webpack-module-federation/) for a functional example.

## Run Sample

1. Run `npm ci` to fetch all dependencies
1. Run `npm run start` to build and run the application
1. Navigate to http://localhost:8080/dist/
