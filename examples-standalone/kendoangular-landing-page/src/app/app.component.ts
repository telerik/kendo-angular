import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { BottomLeftComponent } from './components/bottom-left/bottom-left.component';
import { TransactionsDashboardComponent } from './components/transactions-dashboard/transactions-dashboard.component';
import { BottomRightComponent } from './components/bottom-right/bottom-right.component';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, BottomLeftComponent,BottomRightComponent, TransactionsDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
