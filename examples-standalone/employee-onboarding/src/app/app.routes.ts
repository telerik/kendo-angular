import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./onboarding/onboarding-wizard.component').then((m) => m.OnboardingWizardComponent)
  },
  {
    path: 'support',
    loadComponent: () => import('./support/support.component').then((m) => m.SupportComponent)
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.component').then((m) => m.NotFoundComponent)
  },
  { path: '**', redirectTo: 'not-found' }
];
