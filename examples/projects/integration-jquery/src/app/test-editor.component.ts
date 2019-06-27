import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-other',
    template: `
        <hr />
        <h3>
          {{ value }}
        </h3>
        <p>Change the Kendo UI for jQuery Editor value and blur:</p>
        <textarea #editor rows="10" cols="30" style="height:440px" aria-label="editor">
        </textarea>
    `
})
export class TestEditorComponent implements AfterViewInit, OnDestroy {
    @ViewChild('editor', { static: true }) editorEl: ElementRef;

    public value: string;

    constructor(private hostEl: ElementRef) { }

    ngAfterViewInit() {
        kendo.jQuery(this.editorEl.nativeElement).kendoEditor({
            //Define Editor's options here
            //
            //Use @Input() properties to expose Editor configuration
            resizable: {
                content: true,
                toolbar: true
            },
            change: (args) => {
                this.value = args.sender.value();
            }
        });
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
    }
}
