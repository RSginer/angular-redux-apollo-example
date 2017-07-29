import { Angular2Apollo } from 'angular2-apollo';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

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


const updateCity = gql`
    mutation updateCity($country: String!, $id: ID!, $name: String!) {
        updateCity(country: $country, id: $id, name: $name){
           id,
           name,
           country
        }
    }`;

@Injectable()
export class CitiesService {
  constructor(private apollo: Angular2Apollo) { }

  getAll() {
    return (this.apollo.watchQuery<any>({
      query: getCities,
    //  pollInterval: 20000
    }) as Observable<any>)
      .map(({ data }) => data.allCities)
      .catch(({ err }) => err);
  }

  removeCity(id) {
    return (this.apollo.mutate({
      mutation: deleteCity,
      variables: {
        id: id
      }
    }) as Observable<any>)
      .map(({ data }) => data.deleteCity.id)
      .catch(({ err }) => err);
  }

  updateCity(city) {
    return (this.apollo.mutate({
      mutation: updateCity,
      variables: {
        id: city.id,
        name: city.name,
        country: city.country
      }
    }) as Observable<any>)
      .map(({ data }) =>  data.updateCity)
      .catch(({ err }) => err);
  }
}
