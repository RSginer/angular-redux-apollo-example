import { IPayloadAction } from '../utils/payload-action';
import { CitiesActions } from './cities.actions';
import { ICitiesState, CITIES_INITIAL_STATE } from './cities.store';



export function citiesReducer(state: ICitiesState = CITIES_INITIAL_STATE, action: IPayloadAction) {
  switch (action.type) {
    case CitiesActions.LOAD_SUCCEEDED:
      return Object.assign({}, state, { list: [].concat(action.payload) });
    case CitiesActions.LOAD_FAILED:
      return action.error;
    case CitiesActions.REMOVE_CITY:
      return Object.assign({}, state, {loading: true, list: [].concat(state.list.filter(i => i.id !== action.payload))});

     // return Object.assign({}, state, { loading: true });
    case CitiesActions.REMOVED_SUCCEDED:
      return Object.assign({}, state, {loading: false, list: [].concat(state.list.filter(i => i.id !== action.payload))});
    case CitiesActions.REMOVED_ERROR:
      return Object.assign({}, state, { loading: false });
  }
  return state;
}
