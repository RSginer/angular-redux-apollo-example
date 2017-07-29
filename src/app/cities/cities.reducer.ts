import { IPayloadAction } from '../utils/payload-action';
import { CitiesActions } from './cities.actions';
import { ICitiesState, CITIES_INITIAL_STATE } from './cities.store';
import { tassign } from 'tassign';
import { AppActions } from '../app.actions';
import { CitiesReducerHelper } from './cities.reducer-helper';

export function citiesReducer(state: ICitiesState = CITIES_INITIAL_STATE, action: IPayloadAction) {
  let citiesReducerHelper = new CitiesReducerHelper(state, action);
  switch (action.type) {
    case CitiesActions.LOAD_SUCCEEDED:
      return citiesReducerHelper.loadSucceded();
    case CitiesActions.LOAD_FAILED:
      return citiesReducerHelper.loadFailed();
    case CitiesActions.REMOVE_CITY:
      return citiesReducerHelper.remove();
    case CitiesActions.REMOVED_SUCCEDED:
      return citiesReducerHelper.removedSucceded();
    case CitiesActions.REMOVED_ERROR:
      return citiesReducerHelper.removedError();
    case CitiesActions.SELECT_CITY:
      return citiesReducerHelper.select();
    case CitiesActions.UPDATE_CITY:
      return citiesReducerHelper.update();
    case CitiesActions.UPDATE_SUCCEDED:
      return citiesReducerHelper.updatedSucceded();
  }
  return state;
}

