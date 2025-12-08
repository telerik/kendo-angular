import { Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
    { path: '', component: TeamComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'planning', component: PlanningComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'info', component: InfoComponent }
];
