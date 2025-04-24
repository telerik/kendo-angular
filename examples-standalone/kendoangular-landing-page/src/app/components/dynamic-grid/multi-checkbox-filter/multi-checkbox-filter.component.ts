import { Component, EventEmitter, Input, Output } from '@angular/core';
import { assetTypes } from '../../../data/dynamic-data';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { searchIcon, SVGIcon, xIcon } from '@progress/kendo-svg-icons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { CompositeFilterDescriptor, distinct, filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import { FilterService } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-multi-checkbox-filter',
    standalone: true,
    imports: [KENDO_INPUTS, KENDO_LABELS, KENDO_ICONS, KENDO_BUTTONS],
    templateUrl: './multi-checkbox-filter.component.html',
    styleUrl: './multi-checkbox-filter.component.css',
})
export class MultiCheckboxFilterComponent {
    @Input() public currentFilter!: CompositeFilterDescriptor;
    @Input() public filterService!: FilterService;
    @Input() public field!: string;

    public data: string[] = assetTypes;
    public currentData!: string[];
    public searchIcon: SVGIcon = searchIcon;
    private value: string[] = [];

    public ngAfterViewInit(): void {
        this.currentData = this.data;
        this.value = this.currentFilter.filters
            .filter((f): f is FilterDescriptor => 'operator' in f)
            .map((f: FilterDescriptor) => f.value);
    }

    public isItemSelected(item: string): boolean {
        return this.value.some((x) => x === item);
    }

    public onSelectionChange(item: string): void {
        if (this.value.some((x) => x === item)) {
            this.value = this.value.filter((x) => x !== item);
        } else {
            this.value.push(item);
        }

        this.filterService.filter({
            filters: this.value.map((value) => ({
                field: this.field,
                operator: 'eq',
                value,
            })),
            logic: 'or',
        });
    }

    public valueChange(event: any): void {
        this.currentData = distinct([
            ...this.currentData.filter((dataItem) => this.value.some((val) => val === dataItem)),
            ...filterBy(this.data, {
                operator: 'contains',
                value: event,
            }),
        ]);
    }
}
