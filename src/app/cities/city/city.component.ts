import { IAppState } from './../../store';
import { ICitiesState } from './../cities.store';
import { Input, Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { CitiesActions } from '../cities.actions';
import { citiesReducer } from '../cities.reducer';

@Component({
  selector: 'app-city',
  templateUrl: 'city.component.html'
})

export class CityComponent implements OnInit {

  public selected;
  public subStore;

  constructor(private store: NgRedux<IAppState>,
    private citiesActions: CitiesActions) {

  }

  ngOnInit() {
    this.factoryStore();
    this.subStore.select('selected').subscribe((selected: any) => this.selected = selected);
  }

  factoryStore() {
    this.subStore = this.store.configureSubStore(
      ['cities'],
      citiesReducer);
  }

  updateCity(city: any) {
    this.store.dispatch(this.citiesActions.updateCity(city));
  }

}
