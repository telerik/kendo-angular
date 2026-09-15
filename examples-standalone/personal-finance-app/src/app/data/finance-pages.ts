export interface AccountActivity {
    id: number;
    merchant: string;
    date: string;
    description: string;
    amount: string;
    direction: 'credit' | 'debit';
    status: 'Completed' | 'Pending';
}

export interface BudgetCategory {
    id: number;
    name: string;
    icon: 'home' | 'food' | 'car' | 'film';
    limit: number;
    actual: number;
    trend: string;
    overBudget: boolean;
}

export interface Statement {
    id: number;
    period: string;
    account: string;
    issued: string;
    pages: number;
    size: string;
}

export interface CardActivity {
    id: number;
    merchant: string;
    date: string;
    amount: string;
    status: 'Completed' | 'Pending';
}

export interface FinanceNotification {
    id: number;
    category: 'Security' | 'Payments' | 'Insights';
    title: string;
    detail: string;
    date: string;
    unread: boolean;
}

export const accountActivity: AccountActivity[] = [
    { id: 1, merchant: 'Payroll deposit', date: 'Aug 27, 2026', description: 'Direct deposit', amount: '+$4,850.00', direction: 'credit', status: 'Completed' },
    { id: 2, merchant: 'Northwind Market', date: 'Aug 26, 2026', description: 'Groceries', amount: '-$86.42', direction: 'debit', status: 'Completed' },
    { id: 3, merchant: 'Metro Utilities', date: 'Aug 25, 2026', description: 'Automatic payment', amount: '-$142.00', direction: 'debit', status: 'Pending' },
    { id: 4, merchant: 'Bright Coffee Roasters', date: 'Aug 24, 2026', description: 'Coffee and dining', amount: '-$18.75', direction: 'debit', status: 'Completed' },
    { id: 5, merchant: 'Transfer from savings', date: 'Aug 22, 2026', description: 'Internal transfer', amount: '+$500.00', direction: 'credit', status: 'Completed' },
];

export const budgetCategories: BudgetCategory[] = [
    { id: 1, name: 'Housing', icon: 'home', limit: 2200, actual: 1980, trend: '4% less than last month', overBudget: false },
    { id: 2, name: 'Food & dining', icon: 'food', limit: 850, actual: 910, trend: '7% above last month', overBudget: true },
    { id: 3, name: 'Transportation', icon: 'car', limit: 480, actual: 312, trend: '12% less than last month', overBudget: false },
    { id: 4, name: 'Entertainment', icon: 'film', limit: 300, actual: 186, trend: '3% less than last month', overBudget: false },
];

export const statements: Statement[] = [
    { id: 1, period: 'August 2026', account: 'Everyday Checking •• 4821', issued: 'Aug 27, 2026', pages: 4, size: '248 KB' },
    { id: 2, period: 'July 2026', account: 'Everyday Checking •• 4821', issued: 'Jul 31, 2026', pages: 5, size: '312 KB' },
    { id: 3, period: 'June 2026', account: 'Everyday Checking •• 4821', issued: 'Jun 30, 2026', pages: 4, size: '264 KB' },
    { id: 4, period: 'May 2026', account: 'Everyday Checking •• 4821', issued: 'May 31, 2026', pages: 4, size: '229 KB' },
    { id: 5, period: 'April 2026', account: 'Everyday Checking •• 4821', issued: 'Apr 30, 2026', pages: 3, size: '210 KB' },
];

export const cardActivity: CardActivity[] = [
    { id: 1, merchant: 'Northwind Market', date: 'Aug 26, 2026', amount: '$86.42', status: 'Completed' },
    { id: 2, merchant: 'Bright Coffee Roasters', date: 'Aug 24, 2026', amount: '$18.75', status: 'Completed' },
    { id: 3, merchant: 'Metro Rail', date: 'Aug 23, 2026', amount: '$42.00', status: 'Pending' },
];

export const financeNotifications: FinanceNotification[] = [
    { id: 1, category: 'Security', title: 'New sign-in detected', detail: 'A sign-in was detected from Chrome on macOS.', date: 'Today, 9:42 AM', unread: true },
    { id: 2, category: 'Payments', title: 'Payment scheduled', detail: 'Your Metro Utilities payment is scheduled for tomorrow.', date: 'Yesterday', unread: true },
    { id: 3, category: 'Insights', title: 'Your spending is on track', detail: 'You are 8% below your monthly spending plan.', date: 'Aug 24, 2026', unread: false },
    { id: 4, category: 'Security', title: 'Password updated', detail: 'Your password was updated successfully.', date: 'Aug 18, 2026', unread: false },
];
