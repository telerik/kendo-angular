import { Component } from '@angular/core';

@Component({
    selector: 'upload-component',
    template: `
        <div class="row">
            <div class="info">
                <p>
                    The Upload helps users send files from their file systems to dedicated server handlers which are configured to receive
                    them.
                </p>
                <p>
                    It is a richer version of an <code><![CDATA[<input type="file" />]]></code> element and supports model binding,
                    templates, forms and more.
                </p>
                <p>
                    For more information check the
                    <a href="https://www.telerik.com/kendo-angular-ui/components/uploads/upload/">Upload documentation</a>.
                </p>
            </div>
            <div class="component info">
                <kendo-upload [saveUrl]="'api/Upload'" [removeUrl]="'api/Remove'"> </kendo-upload>
            </div>
        </div>
    `,
    styleUrls: ['./content.css']
})
export class UploadComponent {}
