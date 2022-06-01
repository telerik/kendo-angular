import { Component, Input, OnChanges } from '@angular/core';
import * as marked from 'marked';

@Component({
    selector: 'app-markdown',
    template: '<div [innerHTML]="convertedData"></div>'
})
export class MarkdownComponent implements OnChanges {
    @Input() public data: string;
    public convertedData: string;

    public ngOnChanges(): void {
        const md = marked.setOptions({});
        this.convertedData = md.parse(this.data);
    }
}
