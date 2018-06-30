import { ServicesModule } from './communication/services/services.module';
import { ApiModule } from './communication/swagger/api.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoListItemComponent],
  imports: [BrowserModule, ServicesModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
