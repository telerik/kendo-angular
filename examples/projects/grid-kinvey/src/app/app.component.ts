import { Component, OnInit } from '@angular/core';
import {
  GridDataResult,
  DataStateChangeEvent,
} from '@progress/kendo-angular-grid';

import {
  UserService,
  DataStoreService,
  DataStoreType,
  Query,
  PingService,
} from 'kinvey-angular-sdk';

import {
  State,
  SortDescriptor,
  CompositeFilterDescriptor,
  FilterDescriptor,
  isCompositeFilterDescriptor,
  toODataString,
} from '@progress/kendo-data-query';

import * as _ from 'lodash';
import { DateTime } from "luxon";

@Component({
  selector: 'my-app',
  template: `
        <kendo-grid [data]="gridData" [loading]="loading" [height]="410">
        <kendo-grid-column field="_kmd.ect" title="Date" filter="date" format="{0:g}" width="200">
        </kendo-grid-column>
        <kendo-grid-column field="AccessNumber" title="Access Number" filter="text" width="120" media="lg">
        </kendo-grid-column>
        <kendo-grid-column field="Volume" title="Volume" filter="numeric" width="100" media="md">
        </kendo-grid-column>
        <kendo-grid-column field="Amount" title="Amount" filter="numeric" format="{0:c}" width="100">
        </kendo-grid-column>
        <kendo-grid-column field="Type" title="Type" filter="text" width="250" media="sm">
        </kendo-grid-column>
    </kendo-grid>
    <br />
    <button style="display: block; margin: auto;" (click)="callFetch()">Fetch Data</button>
    `,
})
export class AppComponent implements OnInit {
  private useNetworkDatStoreType: boolean = true;
  public loading: boolean = false;
  public ledgerColl: any;
  private debug: boolean = true;
  private advDebug: boolean = false;
  public gridData: GridDataResult = {
    data: [],
    total: 0,
  };
  sort: SortDescriptor[] = [
    {
      field: '_kmd.ect',
      dir: 'desc',
    },
  ];
  state: State | any = {
    skip: 0,
    take: 20,
    sort: this.sort,
    filter: {
      logic: 'and',
      filters: [
        {
          field: 'GlobalCustomerID',
          operator: 'eq',
          value: 7777777777777,
        },
        {
          field: 'JobNumber',
          operator: 'eq',
          value: 'TEST7777',
        },
        {
          filters: [
            {
              field: '_kmd.ect',
              operator: 'gte',
              value: '2022-01-01T00:00:00.000Z', // startDate
            },
            {
              field: '_kmd.ect',
              operator: 'lte',
              value: '2022-02-01T00:00:00.000Z', // endDate
            },
          ],
        },
      ],
    },
  };

  constructor(
    private userService: UserService,
    private datastoreService: DataStoreService,
    private pingService: PingService,
  ) {
    this.ledgerColl = this.datastoreService.collection(
      'Ledger',
      this.useNetworkDatStoreType ? DataStoreType.Network : DataStoreType.Auto
    );
  }

  async ngOnInit() {
    try {
      const response = await this.pingService.ping();
      if (this.debug) {
        console.debug("Kinvey is alive >> Version = " + response.version + "; Response: " + response.kinvey);
      }

      let user: any = await this.userService.login('user11', '1234');
    } catch (error: any) {
      console.error(error);
    }
  }

  public async callFetch() {
    try {
      if (this.useNetworkDatStoreType) {
        this.gridData = await this.fetchGridDataNetwork(this.state);
      } else {
        this.gridData = await this.fetchGridData(this.state);
      }
      console.log('new data retreived');
    } catch (error: any) {
      console.error('ActivityComponent.callFetch >> error = ' + error);
    }
  }

  private fetchGridData(state: State | any): Promise<GridDataResult> {
    // create query
    const stateCopy = _.cloneDeep(state);
    const query = this.convertGridStateKinvey(stateCopy);

    this.loading = true;

    return new Promise((resolve, reject) => {
      this.ledgerColl
        .find(query)
        .then((entities: Array<any>) => {
          // convert date strings
          const gridData: GridDataResult = {
            data: entities.map((item: any) => {
              item._kmd.ect = new Date(item._kmd.ect);
              if (item.hasOwnProperty('Date')) {
                item.Date = new Date(item.Date);
              }
              return item;
            }),
            total: entities.length + stateCopy.skip,
          };

          this.loading = false;

          resolve(gridData);
        })
        .catch((error: any) => {
          const msg = JSON.stringify(
            error.message,
            Object.getOwnPropertyNames(error)
          );
          console.error(`ActivityComponent.fetchGridData >> error = ${msg}`);
          this.loading = false;
          reject(msg);
        });
    });
  }

  private fetchGridDataNetwork(state: State | any): Promise<GridDataResult> {
    // create query
    const stateCopy = _.cloneDeep(state);
    const query = this.convertGridStateKinvey(stateCopy);

    this.loading = true;

    return new Promise((resolve, reject) => {
      var stream = this.ledgerColl.find(query);
      stream.subscribe((entities: Array<any>) => {
        // convert date strings
        const gridData: GridDataResult = {
          data: entities.map((item: any) => {
            item._kmd.ect = new Date(item._kmd.ect);
            if (item.hasOwnProperty('Date')) {
              item.Date = new Date(item.Date);
            }
            return item;
          }),
          total: entities.length + stateCopy.skip,
        };

        this.loading = false;

        resolve(gridData);
      }, (error: any) => {
        const msg = JSON.stringify(
          error.message,
          Object.getOwnPropertyNames(error)
        );
        console.error(`ActivityComponent.fetchGridData >> error = ${msg}`);
        this.loading = false;
        reject(msg);
      }, function onComplete() {
        // ...
      });
    });
  }

  public convertGridStateKinvey(state: State): Query {
    if (this.advDebug) {
      console.debug("KinveyService.convertGridStateKinvey >> state = " + JSON.stringify(state));
    }

    const query: Query = new Query();

    // handle state
    if (state) {
      if (state.skip) {
        query.skip = state.skip;
      }
      query.limit = state.take ?? 10000;  // <https://devcenter.kinvey.com/angular2/guides/datastore#Fetching>
      if (state.sort) {
        const sort: SortDescriptor[] = state.sort;

        sort.forEach((element: SortDescriptor) => {
          if (element.dir == "asc") {
            query.ascending(element.field);
          } else if (element.dir == "desc") {
            query.descending(element.field);
          }
        });
      }
      if (state.filter) {
        const filter: CompositeFilterDescriptor = state.filter;
        const filterLogic: string = filter.logic;
        const filters: Array<FilterDescriptor | CompositeFilterDescriptor> = filter.filters;
        const numFilters = filters.length;
        const queries: Array<Query> = [];
        if (this.advDebug) {
          console.debug("KinveyService.convertGridStateKinvey >> filter = " + JSON.stringify(filter));
        }
        if (this.advDebug) {
          console.debug("KinveyService.convertGridStateKinvey >> filter >> numFilters = " + numFilters.toString());
        }

        // fill array of queries
        filters.forEach((element: FilterDescriptor | CompositeFilterDescriptor) => {
          if (this.advDebug) {
            console.debug("KinveyService.convertGridStateKinvey >> filter >> element = " + JSON.stringify(element));
          }

          const subQuery: Query = new Query();
          if (isCompositeFilterDescriptor(element)) {
            const subFilters: Array<FilterDescriptor | CompositeFilterDescriptor> = element.filters;

            subFilters.forEach((element1: FilterDescriptor | CompositeFilterDescriptor) => {
              if (this.advDebug) {
                console.debug("KinveyService.convertGridStateKinvey >> subFilters >> element1 = " + JSON.stringify(element1));
              }

              const subQuery1: Query = new Query();
              if (!isCompositeFilterDescriptor(element1)) {
                // handle dates
                if (element1.value instanceof Date) {
                  if (this.advDebug) {
                    console.debug("KinveyService.convertGridStateKinvey >> convert date to a string >> element1.field = " + element1.field);
                  }
                  element1.value = DateTime.fromJSDate(element1.value).toISO();
                }

                // create sub query
                switch (element1.operator) {
                  case "eq":
                    subQuery1.equalTo(element1.field as string, element1.value);
                    break;
                  case "neq":
                    subQuery1.notEqualTo(element1.field as string, element1.value);
                    break;
                  case "lt":
                    subQuery1.lessThan(element1.field as string, element1.value);
                    break;
                  case "lte":
                    subQuery1.lessThanOrEqualTo(element1.field as string, element1.value);
                    break;
                  case "gt":
                    subQuery1.greaterThan(element1.field as string, element1.value);
                    break;
                  case "gte":
                    subQuery1.greaterThanOrEqualTo(element1.field as string, element1.value);
                    break;
                  case "startswith":
                    subQuery1.matches(element1.field as string, "^.*" + element1.value as string);
                    break;
                  case "endswith":
                    subQuery1.matches(element1.field as string, "^" + element1.value as string + "$");
                    break;
                  case "contains":
                    subQuery1.matches(element1.field as string, "^.*" + element1.value as string + ".*");
                    break;
                  case "doesnotcontain":
                    subQuery1.matches(element1.field as string, "^.*" + element1.value as string + ".*");
                    break;
                  case "doesnotcontain":
                    subQuery1.matches(element1.field as string, "^((?!" + element1.value as string + ").)*$");
                    break;
                  default:
                    const msg = "KinveyService.convertGridStateKinvey >> unsupported filtering operator: " + element1.operator;
                    console.error(msg);
                  //throw new Error(msg);
                }
              } else {
                const msg = "KinveyService.convertGridStateKinvey >> subFilters type is not a CompositeFilterDescriptor";
                console.error(msg);
              }

              // push into array
              queries.push(subQuery1);
            });
          } else {
            // handle dates
            if (element.value instanceof Date) {
              if (this.advDebug) {
                console.debug("KinveyService.convertGridStateKinvey >> convert date to a string >> element.field = " + element.field);
              }
              element.value = DateTime.fromJSDate(element.value).toISO();
            }

            // create sub query
            switch (element.operator) {
              case "eq":
                subQuery.equalTo(element.field as string, element.value);
                break;
              case "neq":
                subQuery.notEqualTo(element.field as string, element.value);
                break;
              case "lt":
                subQuery.lessThan(element.field as string, element.value);
                break;
              case "lte":
                subQuery.lessThanOrEqualTo(element.field as string, element.value);
                break;
              case "gt":
                subQuery.greaterThan(element.field as string, element.value);
                break;
              case "gte":
                subQuery.greaterThanOrEqualTo(element.field as string, element.value);
                break;
              case "startswith":
                subQuery.matches(element.field as string, "^.*" + element.value as string);
                break;
              case "endswith":
                subQuery.matches(element.field as string, "^" + element.value as string + "$");
                break;
              case "contains":
                subQuery.matches(element.field as string, "^.*" + element.value as string + ".*");
                break;
              case "doesnotcontain":
                subQuery.matches(element.field as string, "^.*" + element.value as string + ".*");
                break;
              case "doesnotcontain":
                subQuery.matches(element.field as string, "^((?!" + element.value as string + ").)*$");
                break;
              default:
                const msg = "KinveyService.convertGridStateKinvey >> unsupported filtering operator: " + element.operator;
                console.error(msg);
              //throw new Error(msg);
            }

            // push into array
            queries.push(subQuery);
          }
        });

        // join operators
        switch (filterLogic) {
          case "or":
            for (let index = 0; index < queries.length; index++) {
              query.or(queries[index]);
            }
            break;
          case "and":
            for (let index = 0; index < queries.length; index++) {
              query.and(queries[index]);
            }
            break;
          case "nor":
            for (let index = 0; index < queries.length; index++) {
              query.nor(queries[index]);
            }
            break;
          default:
            const msg = "KinveyService.convertGridStateKinvey >> unsupported join operator >> filterLogic = " + filterLogic;
            console.error(msg);
          //throw new Error(msg);
        }
      }
    }

    if (this.advDebug) {
      console.debug("KinveyService.convertGridStateKinvey >> query = " + JSON.stringify(query));
    }

    return query;
  }
}
