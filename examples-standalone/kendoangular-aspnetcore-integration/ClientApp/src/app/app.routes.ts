import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'upload', component: UploadComponent },
    { path: 'fetch-data', component: FetchDataComponent },
];
