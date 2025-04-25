import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "grid",
        loadComponent: () =>
            import("./components/dynamic-grid/dynamic-grid.component").then((m) => m.DynamicGridComponent),
    },
    {
        path: "scheduler",
        loadComponent: () => import("./components/scheduler/scheduler.component").then((m) => m.SchedulerComponent),
    },
    {
        path: "charts",
        loadComponent: () => import("./components/charts/charts.component").then((m) => m.ChartsComponent),
    },
    {
        path: "header",
        loadComponent: () => import("./components/header/header.component").then((m) => m.HeaderComponent),
    },
    {
        path: "dateinputs",
        loadComponent: () =>
            import("./components/date-inputs/date-inputs.component").then((m) => m.DateInputsComponent),
    },
    {
        path: "dropdowns",
        loadComponent: () => import("./components/dropdowns/dropdowns.component").then((m) => m.DropdownsComponent),
    },
    {
        path: "layout",
        loadComponent: () => import("./components/layout/my-layout.component").then((m) => m.MyLayoutComponent),
    },
    {
        path: "chat",
        loadComponent: () =>
            import("./components/conversational-ui/conversational-ui.component").then(
                (m) => m.ConversationalUiComponent
            ),
    },
    {
        path: "editor",
        loadComponent: () => import("./components/editor/editor.component").then((m) => m.EditorComponent),
    },
    {
        path: "dialogs",
        loadComponent: () => import("./components/dialogs/dialogs.component").then((m) => m.DialogsComponent),
    },
    { path: "home", redirectTo: "header", pathMatch: "full" },
    { path: "", redirectTo: "header", pathMatch: "full" },
];
