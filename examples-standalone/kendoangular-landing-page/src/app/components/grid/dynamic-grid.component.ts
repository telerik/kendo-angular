import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChipThemeColor, KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_CHARTS } from '@progress/kendo-angular-charts';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { ColumnMenuSettings, DataStateChangeEvent, GridDataResult, KENDO_GRID } from '@progress/kendo-angular-grid';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_TOOLTIPS } from '@progress/kendo-angular-tooltip';
import { State } from '@progress/kendo-data-query';
import { SVGIcon, caretAltDownIcon, caretAltUpIcon } from '@progress/kendo-svg-icons';
import { Subscription } from 'rxjs';
import { cashIcon, goldIcon, realEstateIcon, securitiesIcon } from '../../data/custom-icons';
import { DataService } from '../../services/data.service';
import { MultiCheckboxFilterComponent } from './multi-checkbox-filter/multi-checkbox-filter.component';

@Component({
    selector: 'app-dynamic-grid',
    encapsulation: ViewEncapsulation.None,
    imports: [
        FormsModule,
        CommonModule,
        KENDO_GRID,
        KENDO_DROPDOWNS,
        KENDO_INPUTS,
        KENDO_CHARTS,
        KENDO_BUTTONS,
        KENDO_LABELS,
        KENDO_TOOLTIPS,
        KENDO_ICONS,
        IntlModule,
        MultiCheckboxFilterComponent,
    ],
    templateUrl: './dynamic-grid.component.html',
    styleUrl: './dynamic-grid.component.css',
})
export class DynamicGridComponent implements OnInit, OnDestroy {
    public gridView!: GridDataResult;
    public refreshInterval: number = 100;
    public currentGridDataSize: { text: string; value: number } = { text: '100', value: 100 };
    public positivePriceChangeIcon: SVGIcon = caretAltUpIcon;
    public negativePriceChangeIcon: SVGIcon = caretAltDownIcon;
    public loading: boolean = false;

    private dataSubscription!: Subscription;

    public gridDataSize: { text: string; value: number }[] = [
        { text: '100', value: 100 },
        { text: '5000', value: 5000 },
        { text: '50000', value: 50000 },
        { text: '100000', value: 100000 },
    ];
    public state: State = {
        skip: 0,
        take: 50,
        sort: [],
        group: [],
        filter: {
            logic: 'and',
            filters: [],
        },
    };
    public menuSettings: ColumnMenuSettings = {
        filter: true,
        sort: true,
        columnChooser: false,
    };

    constructor(private domSanitizer: DomSanitizer, private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService.loading$.subscribe((isLoading) => {
            this.loading = isLoading;
        });

        this.dataSubscription = this.dataService.fetchData(this.state).subscribe((result) => {
            this.gridView = result;
        });
    }

    ngOnDestroy(): void {
        if (this.dataSubscription) {
            this.dataSubscription.unsubscribe();
        }
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.dataService.updateGridState(state);
    }

    public onGridSizeChange(event: { text: string; value: number }): void {
        this.currentGridDataSize = event;
        this.loading = true;
        this.dataService.updateTotalRecords(event.value);
        setTimeout(() => {
            this.loading = false;
        }, 300);
    }

    public onRefreshIntervalChange(event: number): void {
        this.refreshInterval = event;
        this.dataService.updateRefreshInterval(event);
    }

    public getAssetTypeIcon(assetType: string): SafeHtml {
        if (assetType === 'Real Estate') {
            return this.domSanitizer.bypassSecurityTrustHtml(realEstateIcon);
        } else if (assetType === 'Securities') {
            return this.domSanitizer.bypassSecurityTrustHtml(securitiesIcon);
        } else if (assetType === 'Cash') {
            return this.domSanitizer.bypassSecurityTrustHtml(cashIcon);
        } else if (assetType === 'Gold') {
            return this.domSanitizer.bypassSecurityTrustHtml(goldIcon);
        }
        return '';
    }
}
