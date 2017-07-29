import { tassign } from 'tassign';

export interface ICRUDReducerHelper {

  loadSucceded();

  loadFailed();

  remove();

  removedSucceded();

  removedError();

  select();

  update();

  updatedSucceded();
}
