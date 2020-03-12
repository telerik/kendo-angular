import { Component } from '@angular/core';
import { ChunkSettings } from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public chunkSettings: ChunkSettings = {
        size: 102400
    };
}
