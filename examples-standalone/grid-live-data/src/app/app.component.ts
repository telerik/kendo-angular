import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock, StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public rowData$: Observable<Stock[]>;
    public data: any[] = [936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007];
    constructor(private stockService: StocksService) {
      this.rowData$ = this.stockService.getDataObservable();
    }
  
    ngOnInit() {
     
    
     
    }
    public gridData: any[] = [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
          },
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 19,
          Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
          },
        },
        {
          ProductID: 3,
          ProductName: "Aniseed Syrup",
          UnitPrice: 10,
          Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
          },
        },
      ];
}
