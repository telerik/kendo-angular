import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';

import { KinveyModule, StorageProvider } from 'kinvey-angular-sdk';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    KinveyModule.init({
      appKey: 'kid_XXXXXXXXX',
      appSecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      storage: StorageProvider.IndexedDB,
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
