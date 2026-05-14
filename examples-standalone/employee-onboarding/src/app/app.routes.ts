import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./onboarding/onboarding-wizard.component').then((m) => m.OnboardingWizardComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
