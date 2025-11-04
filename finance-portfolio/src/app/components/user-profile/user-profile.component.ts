import { Subscription } from 'rxjs';
import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Stock } from '../../models';
import { StockDataService } from '../../services/stock-data.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnDestroy {
    public chartData: any[] = [];
    public gridData: any[] = [];

    public seriesLabels = {
        visible: true,
        content: (args: any) => `${args.category}\n${args.value}`
    };
    private serviceSubscription: Subscription;

    constructor(public service: StockDataService) {
        this.serviceSubscription = service.getDataStream().subscribe((data) => {
            this.chartData = data.map((item: Stock) => ({
                category: item.symbol,
                value: item.price
            }));
            this.gridData = data.map((item: Stock) => ({
                symbol: item.symbol,
                name: item.name,
                price: item.price
            }));
        });
    }

    public ngOnDestroy(): void {
        this.serviceSubscription.unsubscribe();
    }
}
