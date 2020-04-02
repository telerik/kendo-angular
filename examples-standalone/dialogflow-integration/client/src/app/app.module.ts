import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { AppComponent } from './app.component';
import { PaymentPlanCardComponent } from './payment-plan-card.component';
import { QuoteCardComponent } from './quote-card.component';


@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    ChatModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PaymentPlanCardComponent,
    QuoteCardComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
