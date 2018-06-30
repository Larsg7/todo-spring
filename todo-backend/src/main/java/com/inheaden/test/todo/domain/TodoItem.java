package com.inheaden.test.todo.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Document(collection = "todoitems")
public class TodoItem {
    @Id
    private String id;

    private String title;
    private String description;
    private Boolean done;

    public TodoItem() {
    }

    @Override
    public String toString() {
        return String.format("TodoItem[id=%s, title=%s, description=%s, done=%s", id, title, description, done);
    }
}


