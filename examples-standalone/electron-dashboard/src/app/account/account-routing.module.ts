import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  { path: 'help', component: AccountComponent, data: { page: 'help' } },
  { path: 'login', component: AccountComponent, data: { page: 'login' } },
  { path: 'notifications', component: AccountComponent, data: { page: 'notifications' } },
  { path: 'profile', component: AccountComponent, data: { page: 'profile' } },
  { path: 'settings', component: AccountComponent, data: { page: 'settings' } },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class AccountRoutingModule {}
