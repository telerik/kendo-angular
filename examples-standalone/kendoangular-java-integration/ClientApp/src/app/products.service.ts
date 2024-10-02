import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { State, toDataSourceRequestString } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { tap } from 'rxjs/operators';
import { process } from '@progress/kendo-data-query';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}
    private baseUrl = 'http://localhost:8080/';

    public getProducts(state: State): Observable<GridDataResult> {
        const url = `${
            this.baseUrl
        }products/get-products?${toDataSourceRequestString(state)}`;

        // The process function is used to manage the state of the Grid data.
        // You can manage the state of the data in the Java backend, but it will require filtering, sorting, paging, and grouping logic.
        return this.http.get<GridDataResult>(url).pipe(
            tap((response) => console.log('GET request response:', response)),
            map((response) => process(response.data, state))
        );
    }
    // The CRUD operations are handled in the Java backend.
    public createProduct(product: any): Observable<any> {
        const url = `${this.baseUrl}products/create-product`;
        return this.http.post(url, product);
    }

    public updateProduct(productId: number, product: any): Observable<any> {
        const url = `${this.baseUrl}products/update-product/${productId}`;
        return this.http.put(url, product);
    }

    public deleteProduct(productId: number): Observable<any> {
        const url = `${this.baseUrl}products/delete-product/${productId}`;
        return this.http.delete(url);
    }
}
