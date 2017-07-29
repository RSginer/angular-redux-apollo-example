import { IPayloadAction } from '../utils/payload-action';
import { CitiesActions } from './cities.actions';
import { ICitiesState, CITIES_INITIAL_STATE } from './cities.store';
import { tassign } from 'tassign';


// Functions
function loadSucceded(state, action) {
  return tassign(state, { list: [].concat(action.payload) });
}

function loadFailed(state, action) {
  return action.error;
}

function removeCity(state, action) {
  return tassign(state);
}

function removedSucceded(state, action) {
  return tassign(state, { list: [].concat(state.list.filter(i => i.id !== action.payload)) });
}

function removedError(state, action) {
  tassign(state);
}

function selectCity(state, action) {
  return tassign(state, { selectedCity: tassign(action.payload) });
}

function updateCity(state, action) {
  let reducedArray = state.list.reduce((prevValue, currentValue, index, array) => {
    if (currentValue.id === action.payload.id) {
      array[index] = tassign(action.payload);
    }
    return array;
  });
  return tassign(state, { selectedCity: null, list: [].concat(reducedArray) });
}


// Reducer
export function citiesReducer(state: ICitiesState = CITIES_INITIAL_STATE, action: IPayloadAction) {
  switch (action.type) {
    case CitiesActions.LOAD_SUCCEEDED:
      return loadSucceded(state, action);
    case CitiesActions.LOAD_FAILED:
      return loadFailed(state, action);
    case CitiesActions.REMOVE_CITY:
      return removeCity(state, action);
    case CitiesActions.REMOVED_SUCCEDED:
      return removedSucceded(state, action);
    case CitiesActions.REMOVED_ERROR:
      return removedError(state, action);
    case CitiesActions.SELECT_CITY:
      return selectCity(state, action);
    case CitiesActions.UPDATE_CITY:
      return state;
    case CitiesActions.UPDATE_SUCCEDED:
      return updateCity(state, action);
  }
  return state;
}

