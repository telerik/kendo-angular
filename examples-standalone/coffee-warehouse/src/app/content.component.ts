import { Component, Input } from '@angular/core';

@Component({
    selector: 'content',
    template: `
        <div *ngIf="selectedItem === 'Dashboard'">
            <dashboard-component class="dashboard-page main-content"></dashboard-component>
        </div>
        <div *ngIf="selectedItem === 'Planning'">
            <planning-component class="planning-page main-content"></planning-component>
        </div>
        <div id="Attachments" *ngIf="selectedItem === 'Profile'">
            <profile-component></profile-component>
        </div>
        <div id="Favourites" *ngIf="selectedItem === 'Info'">Angular Marketing</div>
    `
})
export class ContentComponent {
    @Input() selectedItem: string;
}
