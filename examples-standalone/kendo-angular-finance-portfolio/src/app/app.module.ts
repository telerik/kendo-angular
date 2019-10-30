import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { BadgeComponent } from './components/badge/badge.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StockDataService } from './services/stock-data.service';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';



@NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            FooterComponent,
            StocksComponent,
            StockListComponent,
            NavigationComponent,
            HeatmapComponent,
            BadgeComponent,
            UserProfileComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DropDownsModule,
            BrowserAnimationsModule,
            LayoutModule,
            GridModule,
            ButtonsModule,
            ChartsModule
        ],
        providers: [StockDataService],
        bootstrap: [AppComponent]
    })
export class AppModule { }
