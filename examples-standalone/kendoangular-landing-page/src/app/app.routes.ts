import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'grid',
        title: 'Data Grid',
        loadComponent: () =>
            import('./components/grid/dynamic-grid.component').then((m) => m.DynamicGridComponent),
    },
    {
        path: 'scheduler',
        title: 'Scheduler',
        loadComponent: () => import('./components/scheduler/scheduler.component').then((m) => m.SchedulerComponent),
    },
    {
        path: 'charts',
        title: 'Charts',
        loadComponent: () => import('./components/charts/charts.component').then((m) => m.ChartsComponent),
    },
    {
        path: 'header',
        title: 'Overview',
        loadComponent: () => import('./components/header/header.component').then((m) => m.HeaderComponent),
    },
    {
        path: 'dateinputs',
        title: 'Date Inputs',
        loadComponent: () =>
            import('./components/date-inputs/date-inputs.component').then((m) => m.DateInputsComponent),
    },
    {
        path: 'dropdowns',
        title: 'Dropdowns',
        loadComponent: () => import('./components/dropdowns/dropdowns.component').then((m) => m.DropdownsComponent),
    },
    {
        path: 'layout',
        title: 'Layout',
        loadComponent: () => import('./components/layout/my-layout.component').then((m) => m.MyLayoutComponent),
    },
    {
        path: 'chat',
        title: 'AI and Chat',
        loadComponent: () =>
            import('./components/conversational-ui/conversational-ui.component').then(
                (m) => m.ConversationalUiComponent
            ),
    },
    {
        path: 'editor',
        title: 'Editor',
        loadComponent: () => import('./components/editor/editor.component').then((m) => m.EditorComponent),
    },
    {
        path: 'dialogs',
        title: 'Dialogs',
        loadComponent: () => import('./components/dialogs/dialogs.component').then((m) => m.DialogsComponent),
    },
    {
        path: 'treeview',
        title: 'TreeView',
        loadComponent: () => import('./components/treeview/treeview.component').then((m) => m.TreeviewComponent),
    },
    { path: 'home', redirectTo: 'header', pathMatch: 'full' },
    { path: '', redirectTo: 'header', pathMatch: 'full' },
    {
        path: '**',
        title: 'Page not found',
        loadComponent: () => import('./components/not-found/not-found.component').then((m) => m.NotFoundComponent),
    },
];
