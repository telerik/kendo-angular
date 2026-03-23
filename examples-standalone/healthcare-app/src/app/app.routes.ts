import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ScheduleComponent } from './schedule/schedule';
import { PatientsComponent } from './patients/patients';
import { PatientProfileComponent } from './patients/patient-profile/patient-profile';
import { AnalyticsComponent } from './analytics/analytics';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patients/:id', component: PatientProfileComponent, runGuardsAndResolvers: 'always' },
  { path: 'analytics', component: AnalyticsComponent }
];
