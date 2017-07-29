import { tassign } from 'tassign';
import { ICRUDReducerHelper } from '../utils/crud-reducer-helper';

export class CitiesReducerHelper implements ICRUDReducerHelper {

  constructor(private state, private action) { }

  loadSucceded() {
    return tassign(this.state, { isLoading: false, list: [].concat(this.action.payload) });
  }

  loadFailed() {
    return this.action.error;
  }

  remove() {
    return tassign(this.state, { isLoading: true });
  }

  removedSucceded() {
    return tassign(this.state, { isLoading: false, list: [].concat(this.state.list.filter(i => i.id !== this.action.payload)) });
  }

  removedError() {
    tassign(this.state, { isLoading: false });
  }

  select() {
    return tassign(this.state, { selected: tassign(this.action.payload) });
  }

  update() {
    return tassign(this.state, { isLoading: true });
  }

  updatedSucceded() {
    let reducedArray = this.state.list.reduce((prevValue, currentValue, index, array) => {
      if (currentValue.id === this.action.payload.id) {
        array[index] = tassign(this.action.payload);
      }
      return array;
    });
    return tassign(this.state, { isLoading: false, selected: null, list: [].concat(reducedArray) });
  }
}
