import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditService } from './edit.service';
import { ButtonsModule } from '@progress/kendo-angular-buttons';



const config = {
  apiKey: 'AIzaSyB4-_5thshb6BpSoERI9aRfdF5w3weQnCY',
  authDomain: 'api-project-400013235268.firebaseapp.com',
  databaseURL: 'https://api-project-400013235268.firebaseio.com',
  projectId: 'api-project-400013235268',
  storageBucket: 'api-project-400013235268.appspot.com',
  messagingSenderId: '400013235268'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule
  ],
  providers: [EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
