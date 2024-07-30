import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { State, toDataSourceRequestString, translateDataSourceResultGroups } from "@progress/kendo-data-query";
import { GridDataResult } from "@progress/kendo-angular-grid";

@Injectable({
    providedIn: "root",
})
export class ProductService {
    constructor(private http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string) {}

    public getProducts(state: State): Observable<GridDataResult> {
        const url = `${this.baseUrl}products/get-products?${toDataSourceRequestString(state)}`;
        const hasGroups = state.group && state.group.length;

        return this.http.post<GridDataResult>(url, {}).pipe(
            map(({ data, total }) => ({
                // If the data is grouped, translate it to a compatible format using the translateDataSourceResultGroups helper.
                data: hasGroups ? translateDataSourceResultGroups(data) : data,
                total: total,
            }))
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
