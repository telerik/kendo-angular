import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DrawerComponent } from './drawer/drawer.component';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { UploadComponent } from './uploads/upload.component';
import { ChunkUploadComponent } from './uploads/chunk-upload.component';
import { FileSelectComponent } from './uploads/fileselect.component';
import { LayoutComponent } from './drawer/layout.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [AppComponent, DrawerComponent, UploadComponent, ChunkUploadComponent, FileSelectComponent, LayoutComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([{ path: '', component: DrawerComponent, pathMatch: 'full' }]),
        UploadsModule,
        BrowserAnimationsModule,
        LayoutModule,
        ButtonsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
