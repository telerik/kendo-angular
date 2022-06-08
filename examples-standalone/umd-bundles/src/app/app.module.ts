import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ExcelModule, GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ButtonsModule,
        GridModule,
        ExcelModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
