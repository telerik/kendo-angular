import { Component } from '@angular/core';
import { FetchDataComponent } from '../fetch-data/fetch-data.component';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [FetchDataComponent, UploadComponent]
})
export class HomeComponent {
}
