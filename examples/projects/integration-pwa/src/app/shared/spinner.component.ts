import { Component } from "@angular/core";

@Component({
    selector: 'loading-spinner',
    template: `
        <div class="k-i-loading">
        </div>
    `,
    styles: [`
      .k-i-loading {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 100px;
        color: #252830;
      }
    `]
})
export class LoadingComponent {

};