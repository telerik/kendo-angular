# Using Kendo UI for Angular Grid and Upload component with ASP.NET Core 8.0

This is a sample project that demonstrates how to use Kendo UI for Angular [Grid](https://www.telerik.com/kendo-angular-ui/components/grid/) and [Upload](https://www.telerik.com/kendo-angular-ui/components/uploads/upload/) component with ASP.NET Core based on the Microsoft [ASP.NET Core template](https://learn.microsoft.com/en-us/aspnet/core/client-side/spa/angular?view=aspnetcore-8.0&tabs=visual-studio).

## Getting Started

1. Clone this repository by running the following command:

    ```bash
    git clone https://github.com/telerik/kendo-angular/.git
    ```

1. Make sure to have the [.NET Core 8 SDK](https://dotnet.microsoft.com/download) installed on your machine, along with [Angular CLI 18.0.6](https://v17.angular.io/guide/setup-local#install-the-angular-cli).

1. Navigate to the project folder:

    ```bash
    cd examples-standalone/kendoangular-aspnetcore-integration
    ```

1. Build the project:

    ```bash
    dotnet build
    ```

1. Run the project:

    ```bash
    dotnet run
    ```

1. ASP.NET Core will provide local host addresses where the project is running. Open the provided address in your browser.

1. Wait for the project to load and you will see the Kendo UI for Angular Grid and Upload component in action. This might take a few seconds as Angular CLI will be building the project.

## Additional Information

For more information on how to add Telerik Private NuGet feed to your project, refer to the [Adding the Telerik Private NuGet Feed to VS](https://docs.telerik.com/reporting/getting-started/installation/adding-private-nuget-feed) or [Blazor Private NuGet Source](https://docs.telerik.com/blazor-ui/installation/nuget#use-the-net-cli) articles.
This will provide you access to use [ToDataSourceResult](https://docs.telerik.com/aspnet-mvc/api/kendo.mvc.extensions/queryableextensions#todatasourceresultsystemdatadatatablekendomvcuidatasourcerequest) method and other helpers for your own projects.

Do keep in mind that the ASP.NET Core template uses older version of Angular and ASP.NET Core. You can update both both frameworks to their latest version by following the [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/migration/70-80?view=aspnetcore-8.0&tabs=visual-studio) and [Angular](https://angular.dev/update-guide) update guides. This project was updated to use Angular 18 and ASP.NET Core 8.0.

## See Also

- [Kendo UI for Angular Components](https://www.telerik.com/kendo-angular-ui)
- [Kendo UI for Angular Documentation](https://www.telerik.com/kendo-angular-ui/components/)
- [Kendo UI for Angular Grid Component](https://www.telerik.com/kendo-angular-ui/components/grid/)
- [Kendo UI for Angular Upload Component](https://www.telerik.com/kendo-angular-ui/components/uploads/upload/)
- [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0)
