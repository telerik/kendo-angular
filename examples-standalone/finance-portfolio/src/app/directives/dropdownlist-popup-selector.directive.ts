import { Directive, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[appDropDownListPopupSelector]'
})
export class DropDownListPopupSelectorDirective implements AfterViewInit, OnDestroy {
    private valueChangeSubscription: Subscription | undefined;

    private keyDownHandler = (event: KeyboardEvent) => {
        if (!this.dropdownlist.isOpen) {
            event.stopPropagation();
        }
    };

    constructor(private hostElement: ElementRef<HTMLSpanElement>, private dropdownlist: DropDownListComponent) {}

    public ngAfterViewInit(): void {
        this.hostElement.nativeElement.addEventListener('keydown', this.keyDownHandler, true);
        this.valueChangeSubscription = this.dropdownlist.valueChange.subscribe(() => this.dropdownlist.reset());
    }

    public ngOnDestroy(): void {
        this.hostElement.nativeElement.removeEventListener('keydown', this.keyDownHandler, true);

        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    }
}
