import { Angular2Apollo } from 'angular2-apollo';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

const getCities = gql`
      query CitiesQuery {
        allCities {
          id
          name
          country
        }
      }
    `;

const deleteCity = gql`
    mutation deleteCity($id: ID!) {
        deleteCity(id: $id){
           id
        }
    }`;

@Injectable()
export class CitiesService {
  constructor(private apollo: Angular2Apollo) { }

  getAll() {
    return this.apollo.watchQuery<any>({
      query: getCities
    }).map(({ data, loading }) => data.allCities)
      .catch(({ err }) => err);
  }


  removeCity(id) {
    return this.apollo.mutate({
      mutation: deleteCity,
      variables: {
        id: id
      }
    }).map(({ data, loading }: any) => data)
      .catch(({ err }) => err);
  }
}
