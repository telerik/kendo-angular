import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-real-time-data',
  templateUrl: './real-time-data.component.html',
  styleUrls: ['./real-time-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RealTimeDataComponent implements OnInit {
    public gridView: GridDataResult;
    public data: any[];
    public pageSize = 100;
    public skip = 0;

    constructor() {
        this.data = this.createRandomData(10000);
        this.loadProducts();
    }

    public ngOnInit() {
      const interval = setInterval(() => {
        this.data = this.data.map(item => {
          const change = this.getChange();
          item.change = change;
          item.price = item.price + change;
          return item;
        });
      }, 2000);

      setTimeout(() => clearInterval(interval), 20000);
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: this.data.slice(this.skip, this.skip + this.pageSize),
            total: this.data.length
        };
    }

    /* Generating example data */
    private createRandomData(count: number): any[] {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lastSymbol = '';

        const createSymbol = () => {
          lastSymbol = '    '.split('').map(char => letters[Math.floor(Math.random() * 26)]).join('');
          return lastSymbol;
        };

        return Array(count).fill({}).map((_, idx) => ({
            id: idx + 1,
            symbol: createSymbol(),
            name: lastSymbol + ' Inc.',
            currency: 'USD',
            price: Math.random() * 100 + 10,
            change: this.getChange(),
            stock_exchange_long: 'New York Stock Exchange',
            stock_exchange_short: 'NYSE'
        })
        );
    }

    private getChange = () => {
          const rnd = Math.random();
          return rnd > 0.5 ? rnd > 0.75 ? -Math.random() * 2 : Math.random() * 2 : 0;
        }
}
