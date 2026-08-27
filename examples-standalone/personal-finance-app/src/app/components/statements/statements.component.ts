import { Component } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { downloadIcon, eyeIcon, fileTextIcon, infoCircleIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { statements, Statement } from '../../data/finance-pages';

@Component({
    selector: 'app-statements',
    standalone: true,
    imports: [KENDO_BUTTONS, KENDO_DROPDOWNS, KENDO_ICONS, KENDO_INPUTS],
    templateUrl: './statements.component.html',
    styleUrl: './statements.component.css',
})
export class StatementsComponent {
    public allStatements = statements;
    public filteredStatements: Statement[] = statements;
    public statementPeriods = ['All periods', '2026', '2025'];
    public selectedPeriod = this.statementPeriods[0];
    public query = '';
    public actionMessage = '';
    public fileTextIcon: SVGIcon = fileTextIcon;
    public eyeIcon: SVGIcon = eyeIcon;
    public downloadIcon: SVGIcon = downloadIcon;
    public infoCircleIcon: SVGIcon = infoCircleIcon;

    public filterStatements(): void {
        const normalizedQuery = this.query.trim().toLowerCase();
        this.filteredStatements = this.allStatements.filter((statement) => {
            const periodMatch = this.selectedPeriod === 'All periods' || statement.period.includes(this.selectedPeriod);
            const queryMatch = !normalizedQuery || `${statement.period} ${statement.account}`.toLowerCase().includes(normalizedQuery);
            return periodMatch && queryMatch;
        });
    }

    public setAction(message: string): void {
        this.actionMessage = `${message} is available as a demo action. No document service was contacted.`;
    }
}
