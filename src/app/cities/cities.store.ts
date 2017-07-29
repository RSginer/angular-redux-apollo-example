 export interface ICitiesState {
   list: any[];
   selected: any;
   isLoading: boolean;
 };

 export const CITIES_INITIAL_STATE = {
   list: [],
   selected: null,
   isLoading: false
 };
