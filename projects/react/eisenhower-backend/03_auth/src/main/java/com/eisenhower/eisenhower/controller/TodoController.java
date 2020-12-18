package com.eisenhower.eisenhower.controller;

import com.eisenhower.eisenhower.data.TodoDto;
import com.eisenhower.eisenhower.domain.Importance;
import com.eisenhower.eisenhower.domain.Urgency;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

import static com.eisenhower.eisenhower.domain.Importance.*;
import static com.eisenhower.eisenhower.domain.Urgency.*;

@SuppressWarnings("unused")
@CrossOrigin(origins = "http://localhost:1234")
@RestController
@RequestMapping("/todos")
public class TodoController {

    private Map<UUID, TodoDto> todos = new ConcurrentHashMap<>();

    {
        UUID id0 = UUID.randomUUID();
        UUID id1 = UUID.randomUUID();
        UUID id2 = UUID.randomUUID();
        UUID id3 = UUID.randomUUID();
        UUID id4 = UUID.randomUUID();

        todos.put(id0, new TodoDto(
                id0.toString(),
                URGENT.label(),
                IMPORTANT.label(),
                "Pass the exam",
                "The Javascript exam is next week, I need to pass it."
        ));
        todos.put(id1, new TodoDto(
                id1.toString(),
                URGENT.label(),
                NOT_IMPORTANT.label(),
                "Take down the trash",
                "Quake II RTX just came out, I need to take a look at it!"
        ));
        todos.put(id2, new TodoDto(
                id2.toString(),
                NOT_URGENT.label(),
                IMPORTANT.label(),
                "Learn to speak German",
                "We're going to move to Berlin so it would be a good idea."
        ));
        todos.put(id3, new TodoDto(
                id3.toString(),
                NOT_URGENT.label(),
                NOT_IMPORTANT.label(),
                "Play games",
                "Quake II RTX just came out, I need to take a look at it!"
        ));
        todos.put(id4, new TodoDto(
                id4.toString(),
                NOT_URGENT.label(),
                NOT_IMPORTANT.label(),
                "Watch a movie",
                "My list is very long, I should watch some of them."
        ));
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public Iterable<TodoDto> getTodos() {
        return new ArrayList<>(todos.values());
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping
    public Iterable<TodoDto> saveTodo(@RequestBody TodoDto todo) {
        todos.put(UUID.fromString(todo.getId()), todo);
        return getTodos();
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("{id}")
    public Iterable<TodoDto> deleteTodo(@PathVariable String id) {
        todos.remove(UUID.fromString(id));
        return getTodos();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public TodoDto findById(@PathVariable String id) {
        return todos.get(UUID.fromString(id));
    }
}
