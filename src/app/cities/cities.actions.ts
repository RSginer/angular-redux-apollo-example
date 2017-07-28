import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CitiesActions {
  static LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(CITIES)';
  static LOAD_FAILED = 'LOAD_FAILED(CITIES)';
  static REMOVED_SUCCEDED = 'REMOVED_SUCCEDED';
  static REMOVED_ERROR = 'REMOVED_ERROR';
  static REMOVE_CITY = 'REMOVE_CITY';


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
}
