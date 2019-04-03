import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { Apollo } from 'apollo-angular';
import { EditService } from './edit.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [{
    deps: [ Apollo ],
    provide: EditService,
    useFactory: (apollo: Apollo) => () => new EditService(apollo)
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
