<div align="center">
  <a href="https://www.telerik.com/kendo-angular-ui/"><img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/productsimages/kendo-ui-for-angular/kendoka_with_logo-min.png?sfvrsn=568f4b7c_1" height="60" alt="Kendo UI for Angular" /></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://angular.io/"><img src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg" height="60" alt="Angular" /></a>
</div>

<h1 align="center">Java Spring Boot Integration — Kendo UI for Angular</h1>

<p align="center">
  Demonstrates the <a href="https://www.telerik.com/kendo-angular-ui/components/grid/">Grid</a> and <a href="https://www.telerik.com/kendo-angular-ui/components/uploads/upload/">Upload</a> components with a <strong>Java Spring Boot</strong> Maven backend.
  <br />
  See the <a href="https://www.telerik.com/kendo-angular-ui/components/installation/java-spring">Java integration article</a> for full details.
</p>

---

## Components Used

| Component | Docs |
|-----------|------|
| Grid | [Grid Component](https://www.telerik.com/kendo-angular-ui/components/grid/) |
| Upload | [Upload Component](https://www.telerik.com/kendo-angular-ui/components/uploads/upload/) |

---

## Project Structure

| Directory | Description |
|-----------|-------------|
| `frontend/` | Angular application |
| `backend/` | Java Spring Boot application |

## Prerequisites

- [Angular CLI 18.0.0+](https://angular.io/cli)
- [JDK 23](https://www.oracle.com/java/technologies/downloads/) — download the correct build for your architecture (arm64 for Apple Silicon, x64 for Intel)
- [Apache Maven](https://formulae.brew.sh/formula/maven) — install via Homebrew on macOS or [download manually](https://maven.apache.org/install.html)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/telerik/kendo-angular/
```

### Start the Backend

```bash
cd examples-standalone/kendoangular-java-integration/backend
mvn spring-boot:run
```

Backend available at `http://localhost:8080`.

### Start the Frontend

```bash
cd examples-standalone/kendoangular-java-integration/ClientApp
npm install
ng serve
```

Frontend available at `http://localhost:4200`.

---

## Features

**Grid Component**
- Displays a list of products
- Client-side sorting, filtering, grouping, and paging via the [process helper](https://www.telerik.com/kendo-angular-ui/components/data-query/bulk-operations)
- Full CRUD operations against the server

**Upload Component**
- File upload to the backend server

## See Also

- [Kendo UI for Angular with ASP.NET Core](https://www.telerik.com/kendo-angular-ui/components/installation/dotnet-core)
- [Kendo UI for Angular Components](https://www.telerik.com/kendo-angular-ui)
- [Grid Component Docs](https://www.telerik.com/kendo-angular-ui/components/grid/)
- [Upload Component Docs](https://www.telerik.com/kendo-angular-ui/components/uploads/upload/)
- [Java Spring Initializr](https://start.spring.io/)
