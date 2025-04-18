import { Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'investments', component: InvestmentsComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: 'ai-assistant', component: AiAssistantComponent },
    { path: 'settings', component: SettingsComponent },
];
