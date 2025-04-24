import { Routes } from '@angular/router';
import { TransactionsDashboardComponent } from './components/transactions-dashboard/transactions-dashboard.component';
import { BottomLeftComponent } from './components/bottom-left/bottom-left.component';
import { BottomRightComponent } from './components/bottom-right/bottom-right.component';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';

export const routes: Routes = [
    { path: 'dashboard', component: TransactionsDashboardComponent },
    { path: 'transactions', component: TransactionsDashboardComponent },
    { path: 'bottom-left', component: BottomLeftComponent },
    { path: 'bottom-right', component: BottomRightComponent },
    { path: 'grid', component: DynamicGridComponent },
    { path: 'home', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
