import { IAppState } from './../../store';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { select, NgRedux, ObservableStore } from '@angular-redux/store';
import { CitiesActions } from '../cities.actions';
import { AppActions } from '../../app.actions';
import { citiesReducer } from '../cities.reducer';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css'],
})
export class CitiesListComponent implements OnInit {

  public cities: any[];
  public isLoading: boolean;
  private subStore: ObservableStore<any>;

  constructor(
    private store: NgRedux<IAppState>,
    private citiesActions: CitiesActions
  ) { }

  ngOnInit() {
    this.factoryStore();
    this.subStore.select('list').subscribe((cities: any) => this.cities = cities);
    this.subStore.select('isLoading').subscribe((isLoading: boolean) => this.isLoading = isLoading);
  }

  factoryStore() {
    this.subStore = this.store.configureSubStore(
      ['cities'],
      citiesReducer);
  }

  getItemName(index, item) {
    return item.name;
  }

  selectCity(city: any) {
    this.store.dispatch(this.citiesActions.selectCity(city));
  }

  deleteCity(id: any) {
    this.store.dispatch(this.citiesActions.removeCity(id));
  }
}
