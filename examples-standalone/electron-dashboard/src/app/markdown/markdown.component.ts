import { Component, Input } from '@angular/core';
import * as marked from 'marked';

@Component({
    selector: 'markdown',
    template: '<div [innerHTML]="convertedData"></div>'
})
export class MarkdownComponent {
    @Input('data') public data: string;
    public convertedData: string;

    ngOnChanges() {
        const md = marked.setOptions({});
        this.convertedData = md.parse(this.data);
    }
}
