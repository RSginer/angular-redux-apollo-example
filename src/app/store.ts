import { ICitiesState, CITIES_INITIAL_STATE } from './cities/cities.store';
import { Store } from 'apollo-client/store';

export interface IAppState {
  cities: ICitiesState;
  elephants: any;
  lions: any;
  apollo: Store;
}

export const INITIAL_STATE = {
  cities: CITIES_INITIAL_STATE,
  elephants: [],
  lions: [],
  apollo: {}
}
