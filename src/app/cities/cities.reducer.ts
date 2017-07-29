import { IPayloadAction } from '../utils/payload-action';
import { CitiesActions } from './cities.actions';
import { ICitiesState, CITIES_INITIAL_STATE } from './cities.store';
import { tassign } from 'tassign';
import { AppActions } from '../app.actions';


// Functions

function load(state, action) {
  return tassign(state, { isLoading: true });
}

function loadSucceded(state, action) {
  return tassign(state, { isLoading: false, list: [].concat(action.payload) });
}

function loadFailed(state, action) {
  return action.error;
}

function remove(state, action) {
  return tassign(state, { isLoading: true });
}

function removedSucceded(state, action) {
  return tassign(state, { isLoading: false, list: [].concat(state.list.filter(i => i.id !== action.payload)) });
}

function removedError(state, action) {
  tassign(state, { isLoading: false });
}

function select(state, action) {
  return tassign(state, { selectedCity: tassign(action.payload) });
}

function update(state, action) {
  return tassign(state, { isLoading: true });
}

function updateSucceded(state, action) {
  let reducedArray = state.list.reduce((prevValue, currentValue, index, array) => {
    if (currentValue.id === action.payload.id) {
      array[index] = tassign(action.payload);
    }
    return array;
  });
  return tassign(state, { isLoading: false, selectedCity: null, list: [].concat(reducedArray) });
}


// Reducer
export function citiesReducer(state: ICitiesState = CITIES_INITIAL_STATE, action: IPayloadAction) {
  switch (action.type) {
    case AppActions.LOAD_DATA:
      return load(state, action);
    case CitiesActions.LOAD_SUCCEEDED:
      return loadSucceded(state, action);
    case CitiesActions.LOAD_FAILED:
      return loadFailed(state, action);
    case CitiesActions.REMOVE_CITY:
      return remove(state, action);
    case CitiesActions.REMOVED_SUCCEDED:
      return removedSucceded(state, action);
    case CitiesActions.REMOVED_ERROR:
      return removedError(state, action);
    case CitiesActions.SELECT_CITY:
      return select(state, action);
    case CitiesActions.UPDATE_CITY:
      return update(state, action);
    case CitiesActions.UPDATE_SUCCEDED:
      return updateSucceded(state, action);
  }
  return state;
}

