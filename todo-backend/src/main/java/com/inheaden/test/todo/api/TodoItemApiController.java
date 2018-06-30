package com.inheaden.test.todo.api;

import com.inheaden.test.todo.domain.TodoItem;
import com.inheaden.test.todo.repositories.TodoItemRepository;
import com.inheaden.test.todo.shared.CRUDApiController;
import io.swagger.annotations.Api;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/todo")
@Api(description = "Api Controller for handling TodoItems.")
public class TodoItemApiController extends CRUDApiController<TodoItem, String, TodoItemRepository> {

    @Data
    public static class FindByTitleBody {
        private String Title;

        public FindByTitleBody() {
        }
    }

    public TodoItemApiController(TodoItemRepository repository) {
        super(repository);
    }

    @PostMapping("/findByTitle")
    public TodoItem findByTitle(@RequestBody FindByTitleBody body) {
        return repository.findByTitle(body.Title);
    }
}
