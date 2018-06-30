import { TodoItem } from './../communication/swagger/model/todoItem';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todoItem: TodoItem;

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
