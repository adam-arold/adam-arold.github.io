import axios from "axios";
import { v4 as uuid } from "uuid";

const client = axios.create({
    baseURL: "http://localhost:8080/todos",
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export default class TodoService {


    async findAll() {
        const result = await client.get("/");
        return result.data;
    }

    async findById(id) {
        const result = await client.get(`/${id}`);
        return result.data;
    }

    async saveTodo(todo) {
        const todoWithId = todo;
        todo["id"] = uuid();
        const result = await client.post("/", todoWithId);
        return result.data;
    }

    async completeTodo(todo) {
        const result = await client.delete(`/${todo.id}`);
        return result.data;
    }
}