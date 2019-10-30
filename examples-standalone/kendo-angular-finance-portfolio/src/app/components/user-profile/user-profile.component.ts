import { StockDataService } from 'src/app/services/stock-data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
    public chartData: any[];
    public gridData: any[];
    public seriesLabels = {
        visible: true,
        content: (args) => `${args.category}\n${args.value}`
    };
    private serviceSubscription: any;

  constructor(public service: StockDataService) {
    this.serviceSubscription = service.getDataStream().subscribe(data => {
        this.chartData = data.data.map(item => ({
            category: item.symbol,
            value: item.price
        }));
        this.gridData = data.data.map(item => ({
            symbol: item.symbol,
            name: item.name,
            price: item.price
        }));
    });
  }

  ngOnInit() {
  }

}
