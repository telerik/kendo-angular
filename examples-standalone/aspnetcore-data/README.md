# Using the Suite with ASP.NET Core

This Kendo UI for Angular sample project demonstrates how to use [Kendo UI for Angular components](https://www.telerik.com/kendo-angular-ui/components) with ASP.NET Core and is based on Microsoft [Angular project template with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular?view=aspnetcore-3.0&tabs=visual-studio) v.3.0. The project features a Grid that can perform CRUD and data operations server-side.

The demo is referred to in the [Kendo UI for Angular official documentation](https://www.telerik.com/kendo-angular-ui/) in the article on [ASP.NET Core integration](https://www.telerik.com/kendo-angular-ui/components/dataquery/mvc-integration/).

## Getting Started

1. Clone the sample apps repository locally by using your favorite Git client by running `git clone https://github.com/telerik/kendo-angular/.git`.
1. Enter the project directory by running `cd examples-standalone/aspnetcore-data`.
1. Enter your Telerik credentials in `nuget.config`
1. Make sure that you have an SQL Server installed.
1. Create a local Blogging database by executing the following query within SQL Server:

    ```
    CREATE DATABASE [Blogging]
    GO

    USE [Blogging]
    GO

    CREATE TABLE[Blog] (
        [BlogId] int NOT NULL IDENTITY,
        [Url] nvarchar(max)NOT NULL,
        CONSTRAINT [PK_Blog] PRIMARY KEY ([BlogId])
    );
    GO

    CREATE TABLE [Post] (
        [PostId] int NOT NULL IDENTITY,
        [BlogId] int NOT NULL,
        [Content] nvarchar(max),
        [Title] nvarchar(max),
        CONSTRAINT [PK_Post] PRIMARY KEY ([PostId]),
        CONSTRAINT [FK_Post_Blog_BlogId] FOREIGN KEY ([BlogId]) REFERENCES[Blog] ([BlogId]) ON DELETE CASCADE
    );
    GO

    INSERT INTO [Blog] (Url) VALUES
    ('http://blogs.msdn.com/dotnet'),
    ('http://blogs.msdn.com/webdev'),
    ('http://blogs.msdn.com/visualstudio')
    GO
    ```
1. Run the project with `dotnet run`.
1. Open http://localhost:5000.
