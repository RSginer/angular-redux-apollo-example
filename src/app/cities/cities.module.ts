import { FormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesEpics } from './cities.epics';
import { CitiesActions } from './cities.actions';
import { CitiesService } from './cities.crud-service';


@NgModule({
  declarations: [
    CitiesListComponent,
    CityComponent
  ],
  providers: [
    CitiesEpics,
    CitiesActions,
    CitiesService
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CitiesListComponent, CityComponent],
})
export class CitiesModule { }
