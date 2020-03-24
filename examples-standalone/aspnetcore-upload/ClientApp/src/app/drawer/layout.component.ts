import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'layout-component',
    template: `
        <div class="header">
            <h5>{{ selectedItem }} component</h5>
        </div>
        <div class="content" id="Upload" *ngIf="selectedItem === 'Upload'">
            <upload-component></upload-component>
        </div>
        <div class="content" id="Chunk Upload" *ngIf="selectedItem === 'Chunk Upload'">
            <chunk-upload-component></chunk-upload-component>
        </div>
        <div class="content" id="File Select" *ngIf="selectedItem === 'File Select'">
            <fileselect-component></fileselect-component>
        </div>
    `,
    styles: [
        `
            .content {
                padding: 20px 20px;
            }
            .header {
                padding: 20px;
                text-align: center;
            }
        `
    ]
})
export class LayoutComponent {
    @Input() public selectedItem: string;
}
