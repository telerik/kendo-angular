import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '@progress/kendo-angular-buttons';
import { WindowRef, WindowService } from '@progress/kendo-angular-dialog';
import { accessibilityIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { SettingsListComponent } from '../settings-list/settings-list.component';

@Component({
    selector: 'app-menu-window',
    template: `
        <kendo-button
            #button
            [svgIcon]="a11yIcon"
            size="large" 
            themeColor="inverse"
            (click)="toggle()"></kendo-button>
        <ng-template #windowTitleBar let-win>
            <span class="k-window-title">Accessibility Settings</span>
            <button kendoWindowCloseAction [window]="win"></button>
        </ng-template>
    `
})
export class MenuWindowComponent implements OnInit {
    @ViewChild('button') public button: ButtonComponent;
    @ViewChild('windowTitleBar') public titleBar: TemplateRef<any>;
    public a11yIcon: SVGIcon = accessibilityIcon;
    public show = false;
    private windowRef: WindowRef | null = null;

    constructor(private windowService: WindowService) { }

    ngOnInit() { }

    public toggle(): void {
        if (!this.windowRef) {
            const {bottom, left, width} = this.button.element.getBoundingClientRect();

            this.windowRef = this.windowService.open({
                width: 400,
                top: bottom,
                left: left - 400 + width,
                content: SettingsListComponent,
                resizable: false,
                titleBarContent: this.titleBar
            });

            const closeSub = this.windowRef.result.subscribe(() => {
                this.windowRef = null;
                closeSub.unsubscribe();
                this.button.focus();
            });
        } else {
            this.windowRef.close();
            this.windowRef = null;
        }
    }
}
