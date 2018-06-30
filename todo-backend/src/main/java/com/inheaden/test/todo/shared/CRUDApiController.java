package com.inheaden.test.todo.shared;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class CRUDApiController<T, ID, TRepository extends MongoRepository<T, ID>> {
    protected final TRepository repository;

    public CRUDApiController(TRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<T> GetAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public T GetById(@PathVariable ID id) {
        return repository.findById(id).orElse(null);
    }

    @PostMapping
    public T Create(@RequestBody T model) {
        return repository.save(model);
    }

    @PutMapping
    public T Update(@RequestBody T model) {
        return repository.save(model);
    }

    @DeleteMapping("/{id}")
    public void Delete(@PathVariable("id") ID id) {
        repository.deleteById(id);
    }
}
