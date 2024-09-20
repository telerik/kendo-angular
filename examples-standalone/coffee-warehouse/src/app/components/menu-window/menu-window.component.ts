import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from '@progress/kendo-angular-buttons';
import { accessibilityIcon, SVGIcon } from '@progress/kendo-svg-icons';

@Component({
    selector: 'app-menu-window',
    template: `
        <kendo-button
            #button
            [svgIcon]="a11yIcon"
            size="large" 
            themeColor="inverse"
            (click)="toggle()"></kendo-button>
        <kendo-window *ngIf="show"
            [top]="top"
            [left]="left"
            [width]="400"
            (close)="show = false; button.focus();"
            [resizable]="false"
            class="settings-panel !k-rounded-lg">
            <kendo-window-titlebar class="!k-rounded-tl-lg !k-rounded-tr-lg" [style.backgroundColor]="'var(--kendo-color-inverse)'" [style.color]="'var(--kendo-color-on-inverse)'">
                <span class="k-window-title">Accessibility Settings</span>
                <button kendoWindowCloseAction></button>
            </kendo-window-titlebar>
            <app-settings-list-component>
            </app-settings-list-component>
        </kendo-window>
    `
})
export class MenuWindowComponent implements OnInit {
    @ViewChild('button') public button: ButtonComponent;
    public a11yIcon: SVGIcon = accessibilityIcon;
    public show = false;
    public left: number;
    public top: number;

    constructor() { }

    ngOnInit() { }

    public toggle(): void {
        if (!this.show) {
            const { left, width} = this.button.element.getBoundingClientRect();
            const { bottom } = document.querySelector('.k-appbar')!.getBoundingClientRect();
            this.top = bottom;
            this.left = left - 400 + width;
        }

        this.show = !this.show;
    }
}
