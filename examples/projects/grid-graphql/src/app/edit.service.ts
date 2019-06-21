import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './model';

import {
  addProductMutation,
  deleteProductMutation,
  getProductsQuery,
  updateProductMutation
} from './queries';

@Injectable()
export class EditService extends BehaviorSubject<Product[]> {
  constructor(private apollo: Apollo) {
    super([]);
  }

  private subscription: Subscription;

  public read() {
    if (this.subscription) {
      return;
    }

    this.subscription = this.apollo.watchQuery({
        query: getProductsQuery
      })
      .valueChanges
      .pipe(
        map((changes: any) => <Product[]> changes.data.products),
      )
      .subscribe(data => super.next(data));
  }

  public save(data: Product, isNew?: boolean): void {
    const mutation = isNew ? addProductMutation : updateProductMutation;
    this.mutate(mutation, data);
  }

  public remove(data: Product): void {
    this.mutate(deleteProductMutation, data);
  }

  private mutate(mutation: any, data: Product): void {
    this.apollo.mutate({
      mutation,
      variables: data,
      refetchQueries: [{
        query: getProductsQuery
      }]
    })
    .subscribe(() => {});
  }
}
