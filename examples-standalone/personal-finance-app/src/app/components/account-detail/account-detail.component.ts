import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { arrowDownIcon, arrowUpIcon, arrowRotateCcwIcon, downloadIcon, eyeIcon, infoCircleIcon, warningCircleIcon, walletIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { accountActivity, AccountActivity } from '../../data/finance-pages';

@Component({
    selector: 'app-account-detail',
    standalone: true,
    imports: [KENDO_LAYOUT, KENDO_BUTTONS, KENDO_ICONS, RouterLink],
    templateUrl: './account-detail.component.html',
    styleUrl: './account-detail.component.css',
})
export class AccountDetailComponent implements OnInit {
    public activity: AccountActivity[] = accountActivity;
    public viewState: 'ready' | 'loading' | 'empty' | 'error' = 'loading';
    public walletIcon: SVGIcon = walletIcon;
    public downloadIcon: SVGIcon = downloadIcon;
    public eyeIcon: SVGIcon = eyeIcon;
    public refreshIcon: SVGIcon = arrowRotateCcwIcon;
    public infoCircleIcon: SVGIcon = infoCircleIcon;
    public warningCircleIcon: SVGIcon = warningCircleIcon;
    public arrowUpIcon: SVGIcon = arrowUpIcon;
    public arrowDownIcon: SVGIcon = arrowDownIcon;
    public balanceVisible = true;

    public ngOnInit(): void {
        this.loadActivity();
    }

    public loadActivity(): void {
        this.viewState = 'loading';
        queueMicrotask(() => {
            this.activity = [...accountActivity];
            this.viewState = this.activity.length ? 'ready' : 'empty';
        });
    }
}
