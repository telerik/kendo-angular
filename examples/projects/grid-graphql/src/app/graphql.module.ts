import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

@NgModule({
  exports: [ApolloModule, HttpClientModule],
  providers: [
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: SERVER_URI,
        }),
      };
    },
    deps: [HttpLink],
  ],
})
export class GraphQLModule {}

