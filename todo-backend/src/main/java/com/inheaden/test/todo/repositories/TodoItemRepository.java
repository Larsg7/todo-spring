package com.inheaden.test.todo.repositories;

import com.inheaden.test.todo.domain.TodoItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TodoItemRepository extends MongoRepository<TodoItem, String> {
    TodoItem findByTitle(String title);
}
