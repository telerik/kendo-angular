import { Routes } from '@angular/router';
import { StocksComponent } from './components/stocks/stocks.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { UtilityPageComponent } from './components/utility-page/utility-page.component';

export const routes: Routes = [
    { path: 'portfolio', component: StocksComponent },
    { path: 'markets', component: HeatmapComponent },
    { path: 'watchlist', component: RealTimeDataComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'settings', component: UtilityPageComponent, data: { page: 'settings' } },
    { path: 'notifications', component: UtilityPageComponent, data: { page: 'notifications' } },
    { path: 'help', component: UtilityPageComponent, data: { page: 'help' } },
    { path: 'login', component: UtilityPageComponent, data: { page: 'login' } },
    { path: '404', component: UtilityPageComponent, data: { page: 'not-found' } },
    { path: 'stocks', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: 'heatmap', redirectTo: '/markets', pathMatch: 'full' },
    { path: 'real-time', redirectTo: '/watchlist', pathMatch: 'full' },
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
