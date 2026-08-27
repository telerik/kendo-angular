import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_PROGRESSBARS } from '@progress/kendo-angular-progressbar';
import { arrowDownIcon, arrowUpIcon, carIcon, filmIcon, foodIcon, homeIcon, infoCircleIcon, warningCircleIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { budgetCategories, BudgetCategory } from '../../data/finance-pages';

@Component({
    selector: 'app-budgets',
    standalone: true,
    imports: [DecimalPipe, KENDO_BUTTONS, KENDO_ICONS, KENDO_PROGRESSBARS],
    templateUrl: './budgets.component.html',
    styleUrl: './budgets.component.css',
})
export class BudgetsComponent implements OnInit {
    public categories: BudgetCategory[] = budgetCategories;
    public viewState: 'ready' | 'loading' | 'empty' | 'error' = 'loading';
    public arrowUpIcon: SVGIcon = arrowUpIcon;
    public arrowDownIcon: SVGIcon = arrowDownIcon;
    public categoryIcons: Record<BudgetCategory['icon'], SVGIcon> = { home: homeIcon, food: foodIcon, car: carIcon, film: filmIcon };
    public infoCircleIcon: SVGIcon = infoCircleIcon;
    public warningCircleIcon: SVGIcon = warningCircleIcon;

    public ngOnInit(): void {
        this.loadBudgets();
    }

    public getProgress(category: BudgetCategory): number {
        return Math.min(Math.round((category.actual / category.limit) * 100), 100);
    }

    public loadBudgets(): void {
        this.viewState = 'loading';
        queueMicrotask(() => {
            this.categories = [...budgetCategories];
            this.viewState = this.categories.length ? 'ready' : 'empty';
        });
    }
}
