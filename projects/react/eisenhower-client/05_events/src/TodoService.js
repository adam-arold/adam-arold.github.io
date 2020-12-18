import Urgency from "./Urgency";
import Importance from "./Importance";

let counter = 1;

const mockTodos = [{
    id: counter++,
    urgency: Urgency.URGENT,
    importance: Importance.IMPORTANT,
    title: "Pass the Exam",
    description: "The Javascript exam is next week, I need to pass it."
}, {
    id: counter++,
    urgency: Urgency.URGENT,
    importance: Importance.NOT_IMPORTANT,
    title: "Take down the trash",
    description: "I always forget it and it is very stinky after a while."
}, {
    id: counter++,
    urgency: Urgency.NOT_URGENT,
    importance: Importance.IMPORTANT,
    title: "Learn to speak German",
    description: "We're going to move to Berlin so it would be a good idea."
}, {
    id: counter++,
    urgency: Urgency.NOT_URGENT,
    importance: Importance.NOT_IMPORTANT,
    title: "Play games",
    description: "Quake II RTX just came out, I need to take a look at it!"
}, {
    id: counter++,
    urgency: Urgency.NOT_URGENT,
    importance: Importance.NOT_IMPORTANT,
    title: "Watch a movie",
    description: "My list is very long, I should watch some of them."
}];

export default class TodoService {

    constructor(todos = mockTodos) {
        this.todos = new Map();
        todos.forEach(todo => {
            this.todos.set(todo.id, todo);
        });
    }

    async findAll() {
        return Array.from(this.todos.values());
    }

    async findById(id) {
        return this.todos.get(id);
    }

    async saveTodo(todo) {
        todo["id"] = counter++;
        this.todos.set(todo.id, todo);
        return this.findAll();
    }

    async completeTodo(todo) {
        this.todos.delete(todo.id);
        return this.findAll();
    }
}