import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, StockListComponent, ActionButtonsComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'grid-charts-integration';
}
