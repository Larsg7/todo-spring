import { TodoItem } from './../swagger/model/todoItem';
import { TodoItemApiControllerService } from './../swagger/api/todoItemApiController.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoitemService {
  constructor(private apiService: TodoItemApiControllerService) {}

  public getAll() {
    return this.apiService.getAllUsingGET();
  }

  public deleteById(id: string) {
    return this.apiService.deleteUsingDELETE(id);
  }

  public save(item: TodoItem) {
    if (item.id) {
      return this.apiService.updateUsingPUT(item);
    }
    return this.apiService.createUsingPOST(item);
  }
}
