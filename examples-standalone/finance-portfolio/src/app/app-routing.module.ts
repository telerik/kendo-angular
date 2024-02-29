import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './components/stocks/stocks.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';

const routes: Routes = [
    { path: 'stocks', component: StocksComponent },
    { path: 'heatmap', component: HeatmapComponent },
    { path: 'real-time', component: RealTimeDataComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: '', redirectTo: '/stocks', pathMatch: 'full' },
    { path: '**', redirectTo: '/stocks', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
