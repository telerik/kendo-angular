import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './components/stocks/stocks.component';


const routes: Routes = [
    { path: 'stocks', component: StocksComponent },
    { path: '', redirectTo: '/stocks', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
