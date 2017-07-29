import { ICitiesState } from './../cities.store';
import { Component, Output, EventEmitter } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { CitiesActions } from '../cities.actions';
import { AppActions } from '../../app.actions';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css'],
})
export class CitiesListComponent {

  @Output() public onRemoveCity: EventEmitter<any> = new EventEmitter<any>();
  public cities: any[];

  constructor(
    private store: NgRedux<ICitiesState>,
    private citiesActions: CitiesActions
  ) {
    store.select(['cities', 'list']).subscribe((data: any[]) => {
      this.cities = data;
    });
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
