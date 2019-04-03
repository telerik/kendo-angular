import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

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
