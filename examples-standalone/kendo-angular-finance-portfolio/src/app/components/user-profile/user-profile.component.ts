import { StockDataService } from 'src/app/services/stock-data.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent {
    public chartData: any[];
    public gridData: any[];
    public seriesLabels = {
        visible: true,
        content: (args: any) => `${args.category}\n${args.value}`
    };
    private serviceSubscription: any;

    constructor(public service: StockDataService) {
        this.serviceSubscription = service.getDataStream().subscribe(data => {
            this.chartData = data.data.map((item: Stock) => ({
                category: item.symbol,
                value: item.price
            }));
            this.gridData = data.data.map((item: Stock) => ({
                symbol: item.symbol,
                name: item.name,
                price: item.price
            }));
        });
    }
}
