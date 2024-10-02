# Kendo UI for Angular Grid and Upload Component with Java Spring Boot: A Sample Project

This sample project demonstrates how to utilize Kendo UI for Angular's [Grid](https://www.telerik.com/kendo-angular-ui/components/grid/) and [Upload](https://www.telerik.com/kendo-angular-ui/components/uploads/upload/) components with a Java Spring Boot Maven backend.

For more detailed information, refer to the [Java integration article](https://www.telerik.com/kendo-angular-ui/components/installation/java-spring).

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Install Required Tools

Ensure you have the following tools installed on your machine:

- **Angular CLI (18.0.0 or later)**: A command-line interface for Angular. [Download Angular CLI](https://angular.io/cli).
- **Java Development Kit (JDK 23)**: Essential for running Java applications. [Download JDK](https://www.oracle.com/java/technologies/downloads/).
- **Apache Maven**: A build automation tool for Java projects. Install using [Homebrew](https://brew.sh/) on macOS, or [download manually](https://maven.apache.org/install.html).

### 2. Clone the Repository

- **Command**: Clone the repository to your local machine to get the project files.

    ```bash
    git clone https://github.com/telerik/kendo-angular/
    ```

### 3. Set Up the Java Spring Boot Project

- **Navigate to the Backend Directory**:

    ```bash
    cd kendo-angular/examples-standalone/kendoangular-java-integration/backend
    ```

- **Run the Java Spring Boot Application**:

    ```bash
    mvn spring-boot:run
    ```

### 4. Set Up the Angular Project

- **Navigate to the Frontend Directory**:

    ```bash
    cd kendo-angular/examples-standalone/kendoangular-java-integration/ClientApp
    ```

- **Install Project Dependencies**:

    ```bash
    npm install
    ```

- **Run the Angular Application**:

    ```bash
    ng serve
    ```

### 5. Access the Application

- **Open Your Browser**:
  - Navigate to `http://localhost:4200` to view the Angular application.
  - The Java Spring Boot application runs on `http://localhost:8080`.

## Functionality

The application demonstrates the following features:

- **Grid Component**:
  - Displays a list of products.
  - Supports client-side sorting, filtering, grouping, and paging using the [process helper](https://www.telerik.com/kendo-angular-ui/components/data-query/bulk-operations).
  - Performs Create, Read, Update, and Delete (CRUD) operations on the server.

- **Upload Component**:
  - Allows users to upload files to the server.

## Project Structure

The project consists of two main parts:

- **Frontend**: Contains the Angular application, located in the `frontend` directory.
- **Backend**: Contains the Java Spring Boot application, located in the `backend` directory.

## See Also

- [Kendo UI for Angular integration with ASP.NET Core](https://www.telerik.com/kendo-angular-ui/components/installation/dotnet-core)
- [Kendo UI for Angular Components](https://www.telerik.com/kendo-angular-ui)
- [Kendo UI for Angular Documentation](https://www.telerik.com/kendo-angular-ui/components/)
- [Kendo UI for Angular Grid Component](https://www.telerik.com/kendo-angular-ui/components/grid/)
- [Kendo UI for Angular Upload Component](https://www.telerik.com/kendo-angular-ui/components/uploads/upload/)
- [Java Spring Initializr](https://start.spring.io/)
