import { Component } from "@angular/core";
import { ChunkSettings } from "@progress/kendo-angular-upload";

@Component({
    selector: "app-upload",
    templateUrl: "./upload.component.html",
    styleUrl: "./upload.component.css",
})
export class UploadComponent {
    public chunkSettings: ChunkSettings = {
        size: 102400,
    };
}
