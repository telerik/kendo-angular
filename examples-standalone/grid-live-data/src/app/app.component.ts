import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { TotalPortfolioComponent } from './total-portfolio/total-portfolio.component';

@Component({
  selector: 'app-root',
  imports: [GridComponent, HeaderComponent, MainPanelComponent, MyPortfolioComponent, TotalPortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grid-live-data';
}
