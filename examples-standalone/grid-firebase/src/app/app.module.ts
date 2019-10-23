import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditService } from './edit.service';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

const firebaseConfig = {
    apiKey: "AIzaSyD68ysdlWJT8yLB7kSUcCuxlrWBqUPX4Tg",
    authDomain: "kendo-grid-crud.firebaseapp.com",
    databaseURL: "https://kendo-grid-crud.firebaseio.com",
    projectId: "kendo-grid-crud",
    storageBucket: "kendo-grid-crud.appspot.com",
    messagingSenderId: "1005892024994",
    appId: "1:1005892024994:web:e74d331eb7cd46f13335fb"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule
  ],
  providers: [EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }