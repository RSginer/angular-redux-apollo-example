import { CitiesService } from './cities.service';
import { CitiesActions } from './cities.actions';
import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { AppActions } from '../app.actions';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class CitiesEpics {
  epics: Epic<Action>[];

  constructor(
    private service: CitiesService,
    private actions: CitiesActions
  ) {
    this.epics = [this.loadCities, this.removeCity];
  }

  loadCities = action$ => action$
    .ofType(AppActions.LOAD_DATA)
    .switchMap(a => this.service.getAll()
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));

  removeCity = action$ => action$
    .ofType(CitiesActions.REMOVE_CITY)
    .switchMap(a => this.service.removeCity(a.payload))
    .map(data =>  this.actions.removedSucceded(data))
    .catch(err => this.actions.removedError(err));


}
