import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type AccountPage = 'help' | 'login' | 'notifications' | 'profile' | 'settings';

interface AccountPageContent {
  eyebrow: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  public page: AccountPage = 'profile';

  public readonly content: Record<AccountPage, AccountPageContent> = {
    help: {
      eyebrow: 'Help and support',
      title: 'How can we help?',
      description: 'Find guidance for common sales workspace tasks or contact the support team.',
    },
    login: {
      eyebrow: 'Welcome back',
      title: 'Sign in to your workspace',
      description: 'Use your company account to access sales data and customer records.',
    },
    notifications: {
      eyebrow: 'Notifications center',
      title: 'Stay up to date',
      description: 'Review the latest changes across your pipeline and customer accounts.',
    },
    profile: {
      eyebrow: 'User profile',
      title: 'Alex Morgan',
      description: 'Manage your personal details and workspace identity.',
    },
    settings: {
      eyebrow: 'Settings and preferences',
      title: 'Workspace preferences',
      description: 'Choose how the sales workspace keeps you informed and organized.',
    },
  };

  constructor(route: ActivatedRoute) {
    this.page = route.snapshot.data['page'] as AccountPage;
  }
}
