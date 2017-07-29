import { Observable } from 'rxjs';

export interface ICRUDService {

  getAll();

  remove(id);

  update(entity);
}
