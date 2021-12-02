import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private stocksUrl: string = 'assets/data.json';
  private immutableData!: Stock[];
  constructor(private http: HttpClient) { }

  getDataObservable(): Observable<Stock[]> {
    return new Observable<Stock[]>((observer) => {
      this.http.get<Stock[]>(this.stocksUrl).subscribe((data: Stock[]) => {
        console.log(data);
        this.immutableData = data;

        observer.next(this.immutableData);

        setInterval(() => {
          this.immutableData = this.immutableData.map((row: Stock) =>
            this.updateRandomRowWithData(row)
          );

          observer.next(this.immutableData);
        }, 1000);
      });
    });
  }

  updateRandomRowWithData(row: Stock): Stock {
    const shouldUpdateData = Math.random() < 0.3;
    if (shouldUpdateData) {
      let delta = Math.floor(30 * Math.random()) / 10;
      delta *= Math.round(Math.random()) ? 1 : -1;

      const newValue = row.amount + Math.floor(delta);
      let newRow = { ...row, amount: newValue };
      return newRow;
    } else {
      return row;
    }
  }

}
export interface Stock {
    id: number;
    stock: string;
    currency: string;
    amount: number;
  }