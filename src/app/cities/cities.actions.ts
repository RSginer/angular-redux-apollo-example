import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CitiesActions {
  static LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(CITIES)';
  static LOAD_FAILED = 'LOAD_FAILED(CITIES)';

  static REMOVED_SUCCEDED = 'REMOVED_SUCCEDED(CITY)';
  static REMOVED_ERROR = 'REMOVED_ERROR(CITY)';
  static REMOVE_CITY = 'REMOVE_CITY';

  static SELECT_CITY = 'SELECT_CITY';

  static UPDATE_CITY = 'UPDATE_CITY';
  static UPDATE_SUCCEDED = 'UPDATED_SUCCEDED(CITY)';
  static UPDATE_ERROR = 'UPDATED_ERROR(CITY)';


  loadSucceeded(payload) {
    return {
      type: CitiesActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: CitiesActions.LOAD_FAILED,
      error,
    };
  }

  removedSucceded(id) {
    return {
      type: CitiesActions.REMOVED_SUCCEDED,
      payload: id
    };
  }
  removedError(error) {
    return {
      type: CitiesActions.REMOVED_ERROR,
      error
    };
  }

  removeCity(id) {
    return {
      type: CitiesActions.REMOVE_CITY,
      payload: id
    };
  }

  selectCity(city) {
    return {
      type: CitiesActions.SELECT_CITY,
      payload: city
    };
  }

  updateCity(city) {
    return {
      type: CitiesActions.UPDATE_CITY,
      payload: city
    };
  }

  updateSucceded(city) {
    return {
      type: CitiesActions.UPDATE_SUCCEDED,
      payload: city
    };
  }

  updateError(city) {
    return {
      type: CitiesActions.UPDATE_ERROR,
      payload: city
    };
  }
}
