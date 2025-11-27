import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { State, translateDataSourceResultGroups } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}
    private baseUrl = 'http://localhost:8080/';

    public getProducts(state: State): Observable<GridDataResult> {
        const url = `${this.baseUrl}products/get-products`;
        const hasGroups = state.group && state.group.length;

        return this.http.post<any>(url, state).pipe(
            map((response) => {
                const translatedData = hasGroups ? translateDataSourceResultGroups(response.data) : response.data;
                
                return {
                    data: translatedData,
                    total: response.total,
                    aggregates: response.aggregates
                } as GridDataResult;
            })
        );
    }

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
