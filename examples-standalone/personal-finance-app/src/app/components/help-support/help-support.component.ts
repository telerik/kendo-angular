import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { Component } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { envelopeIcon, infoCircleIcon, questionCircleIcon, searchIcon, SVGIcon } from '@progress/kendo-svg-icons';

interface HelpArticle { title: string; detail: string; category: string; }

@Component({
    selector: 'app-help-support',
    standalone: true,
    imports: [KENDO_LAYOUT, KENDO_BUTTONS, KENDO_ICONS, KENDO_INPUTS],
    templateUrl: './help-support.component.html',
    styleUrl: './help-support.component.css',
})
export class HelpSupportComponent {
    public query = '';
    public actionMessage = '';
    public searchIcon: SVGIcon = searchIcon;
    public questionCircleIcon: SVGIcon = questionCircleIcon;
    public envelopeIcon: SVGIcon = envelopeIcon;
    public infoCircleIcon: SVGIcon = infoCircleIcon;
    public articles: HelpArticle[] = [
        { title: 'How do I download a statement?', detail: 'Choose Statements from the navigation, then select Download for the period you need.', category: 'Statements' },
        { title: 'How are available balances calculated?', detail: 'Available balance reflects your current balance minus pending holds and payments.', category: 'Accounts' },
        { title: 'How can I update my profile?', detail: 'Open User Profile to review your contact details and notification preferences.', category: 'Profile' },
        { title: 'What should I do if I do not recognize a purchase?', detail: 'Review the transaction details and contact support using the secure path provided by your institution.', category: 'Security' },
    ];

    public get filteredArticles(): HelpArticle[] {
        const query = this.query.trim().toLowerCase();
        return this.articles.filter((article) => !query || `${article.title} ${article.detail} ${article.category}`.toLowerCase().includes(query));
    }

    public contactSupport(): void {
        this.actionMessage = 'Support contact is represented in this demo. No message was sent.';
    }
}
