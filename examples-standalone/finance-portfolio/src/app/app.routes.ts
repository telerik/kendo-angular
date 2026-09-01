import { Routes } from '@angular/router';
import { StocksComponent } from './components/stocks/stocks.component';

export const routes: Routes = [
    { path: 'portfolio', component: StocksComponent },
    { path: 'stocks', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: '**', redirectTo: '/portfolio', pathMatch: 'full' }
];
