import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { SpeakerViewComponent } from './speaker-view/speaker-view.component';
import { SpreadsheetViewComponent } from './spreadsheet-view/spreadsheet-view.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'tickets', component: TicketViewComponent },
    { path: 'speakers', component: SpeakerViewComponent },
    { path: 'event-budget', component: SpreadsheetViewComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
];
