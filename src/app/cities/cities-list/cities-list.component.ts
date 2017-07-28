import { Component,Output, EventEmitter } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { CitiesActions } from '../cities.actions';
import { AppActions } from '../../app.actions';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent {

  @Output() public onRemoveCity: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private store: NgRedux<any>,
    private citiesActions: CitiesActions
  ){

  }
  // Shorthand for
  // constructor(ngRedux: NgRedux { this.elephants$ = ngRedux.select('elephants'); })
  @select(['cities', 'list']) cities$;
  @select(['cities', 'isLoading']) loading;


  // Since we're observing an array of items, we need to set up a 'trackBy'
  // parameter so Angular doesn't tear down and rebuild the list's DOM every
  // time there's an update.
  getItemName(index, item) {
    return item.name;
  }

  deleteCity(id: any) {
    this.store.dispatch(this.citiesActions.removeCity(id));
  }
}
