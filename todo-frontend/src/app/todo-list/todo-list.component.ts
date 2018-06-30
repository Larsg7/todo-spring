import { TodoitemService } from './../communication/services/todoitem.service';
import { TodoItem } from './../communication/swagger/model/todoItem';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todoItems$ = new ReplaySubject<TodoItem[]>(1);

  public todoItemForm: FormGroup;

  public editedItem: TodoItem;

  constructor(
    private todoItemService: TodoitemService,
    private formBuilder: FormBuilder
  ) {
    this.load();

    this.todoItemForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public load(): any {
    this.todoItemService
      .getAll()
      .pipe(
        take(1),
        tap(items => this.todoItems$.next(items))
      )
      .subscribe();
  }

  onDelete(item: TodoItem) {
    this.todoItemService
      .deleteById(item.id)
      .pipe(
        take(1),
        tap(() => this.load())
      )
      .subscribe();
  }

  onEdit(item: TodoItem) {
    this.editedItem = item;
    this.todoItemForm.reset(item);
  }

  onSave() {
    if (this.todoItemForm.invalid) {
      return;
    }

    const title = this.todoItemForm.get('title').value;
    const description = this.todoItemForm.get('description').value;

    let item: TodoItem = {
      title,
      description,
      done: false,
    };

    if (this.editedItem) {
      item = {
        ...item,
        id: this.editedItem.id,
        done: this.editedItem.done,
      };
    }

    this.todoItemService
      .save(item)
      .pipe(
        take(1),
        tap(() => {
          this.load();
          this.editedItem = undefined;
          this.todoItemForm.reset();
        })
      )
      .subscribe();
  }

  ngOnInit() {}
}
