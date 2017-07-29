 export interface ICitiesState {
   list: any[];
   selectedCity: any;
   isLoading: boolean;
 };

 export const CITIES_INITIAL_STATE = {
   list: [],
   selectedCity: null,
   isLoading: false
 };
