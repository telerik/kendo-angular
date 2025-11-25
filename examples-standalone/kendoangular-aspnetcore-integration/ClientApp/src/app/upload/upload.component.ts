import { Component } from "@angular/core";
import { ChunkSettings, KENDO_UPLOAD } from "@progress/kendo-angular-upload";

@Component({
    selector: "app-upload",
    templateUrl: "./upload.component.html",
    styleUrl: "./upload.component.css",
    standalone: true,
    imports: [KENDO_UPLOAD]
})
export class UploadComponent {
    public chunkSettings: ChunkSettings = {
        size: 102400,
    };
}
