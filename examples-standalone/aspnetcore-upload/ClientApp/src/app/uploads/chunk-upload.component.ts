import { Component } from '@angular/core';
import { ChunkSettings } from '@progress/kendo-angular-upload';

@Component({
    selector: 'chunk-upload-component',
    template: `
        <div class="row">
            <div class="info">
                <p>
                    The Chunk Upload allows splitting files into smaller chunks and sending them asynchronously through multiple requests to
                    the server.
                </p>
                <p>
                    The <a href="https://www.telerik.com/kendo-angular-ui/components/uploads/api/ChunkSettings/">ChunkSettings</a> parameter
                    enables you to specify the size of each chunk, number of attempts to retry uploading a failed chunk, pause and later
                    resume the process.
                </p>
                <p>
                    For more information check the
                    <a href="https://www.telerik.com/kendo-angular-ui/components/uploads/upload/chunk-upload/"
                        >Chunk Upload documentation.</a
                    >
                </p>
            </div>
            <div class="component info">
                <kendo-upload [saveUrl]="'api/Chunk/Upload'" [removeUrl]="'api/Chunk/Remove'" [chunkable]="chunkSettings"> </kendo-upload>
            </div>
        </div>
    `,
    styleUrls: ['./content.css']
})
export class ChunkUploadComponent {
    public chunkSettings: ChunkSettings = {
        size: 102400
    };
}
