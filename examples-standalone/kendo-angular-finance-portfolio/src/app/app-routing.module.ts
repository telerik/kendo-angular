import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './components/stocks/stocks.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes = [
    { path: 'stocks', component: StocksComponent },
    { path: 'heatmap', component: HeatmapComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: '', redirectTo: '/stocks', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
