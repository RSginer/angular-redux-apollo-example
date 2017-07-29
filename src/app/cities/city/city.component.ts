import { IAppState } from './../../store';
import { ICitiesState } from './../cities.store';
import { Input, Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { CitiesActions } from '../cities.actions';

@Component({
  selector: 'app-city',
  templateUrl: 'city.component.html'
})

export class CityComponent implements OnInit {

  public selectedCity;

  constructor(private store: NgRedux<any>,
    private citiesActions: CitiesActions) {
      store.select(['cities', 'selectedCity']).subscribe((data) => {
        this.selectedCity = data;
      });
    }

  ngOnInit() {
  }

  updateCity(city: any) {
    this.store.dispatch(this.citiesActions.updateCity(city));
  }

}
