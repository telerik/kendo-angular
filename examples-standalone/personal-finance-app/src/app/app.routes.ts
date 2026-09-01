import { Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { StatementsComponent } from './components/statements/statements.component';
import { CardsComponent } from './components/cards/cards.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HelpSupportComponent } from './components/help-support/help-support.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home | Personal Finance' },
    { path: 'transactions', component: TransactionsComponent, title: 'Transactions | Personal Finance' },
    { path: 'investments', component: InvestmentsComponent, title: 'Investments | Personal Finance' },
    { path: 'analytics', component: AnalyticsComponent, title: 'Analytics | Personal Finance' },
    { path: 'ai-assistant', component: AiAssistantComponent, title: 'AI Assistant | Personal Finance' },
    { path: 'account-detail', component: AccountDetailComponent, title: 'Account detail | Personal Finance' },
    { path: 'budgets', component: BudgetsComponent, title: 'Budgets | Personal Finance' },
    { path: 'statements', component: StatementsComponent, title: 'Statements | Personal Finance' },
    { path: 'cards', component: CardsComponent, title: 'Cards | Personal Finance' },
    { path: 'notifications', component: NotificationsComponent, title: 'Notifications | Personal Finance' },
    { path: 'help-support', component: HelpSupportComponent, title: 'Help & Support | Personal Finance' },
    { path: 'profile', component: UserProfileComponent, title: 'User Profile | Personal Finance' },
    { path: 'settings', component: SettingsComponent, title: 'Settings | Personal Finance' },
    { path: '404', component: NotFoundComponent, title: 'Page not found | Personal Finance' },
    { path: '**', redirectTo: '404' },
];
