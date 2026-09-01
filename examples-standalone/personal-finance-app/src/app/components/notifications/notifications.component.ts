import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { Component } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { bellIcon, checkCircleIcon, infoCircleIcon, lockIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { financeNotifications, FinanceNotification } from '../../data/finance-pages';

@Component({
    selector: 'app-notifications',
    standalone: true,
    imports: [KENDO_LAYOUT, KENDO_BUTTONS, KENDO_ICONS, KENDO_INPUTS],
    templateUrl: './notifications.component.html',
    styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
    public notifications: FinanceNotification[] = financeNotifications.map((item) => ({ ...item }));
    public categories = ['All', 'Security', 'Payments', 'Insights'];
    public selectedCategory = 'All';
    public query = '';
    public bellIcon: SVGIcon = bellIcon;
    public checkCircleIcon: SVGIcon = checkCircleIcon;
    public lockIcon: SVGIcon = lockIcon;
    public infoCircleIcon: SVGIcon = infoCircleIcon;

    public get filteredNotifications(): FinanceNotification[] {
        const query = this.query.trim().toLowerCase();
        return this.notifications.filter((item) => {
            const categoryMatch = this.selectedCategory === 'All' || item.category === this.selectedCategory;
            const queryMatch = !query || `${item.title} ${item.detail}`.toLowerCase().includes(query);
            return categoryMatch && queryMatch;
        });
    }

    public get unreadCount(): number {
        return this.notifications.filter((item) => item.unread).length;
    }

    public selectCategory(category: string): void {
        this.selectedCategory = category;
    }

    public markRead(notification: FinanceNotification): void {
        notification.unread = false;
    }

    public markAllRead(): void {
        this.notifications = this.notifications.map((item) => ({ ...item, unread: false }));
    }
}
