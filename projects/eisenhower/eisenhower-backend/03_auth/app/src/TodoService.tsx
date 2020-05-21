import axios from "axios";
import { v4 as uuid } from "uuid";

const client = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});

export default class TodoService {
    private token?: string;

    async findAll() {
        this.checkToken();
        const result = await client.get("/todos");
        return result.data;
    }

    async findById(id: string) {
        this.checkToken();
        const result = await client.get(`/todos/${id}`);
        return result.data;
    }

    async saveTodo(todo: ITodo) {
        this.checkToken();
        const todoWithId = todo;
        todo["id"] = uuid();
        const result = await client.post("/todos/", todoWithId);
        return result.data;
    }

    async completeTodo(todo: ITodo) {
        this.checkToken();
        const result = await client.delete(`/todos/${todo.id}`);
        return result.data;
    }

    private async checkToken() {
        if (!this.token) {
            const response = await client.post("/authenticate", {
                username: "user",
                password: "password",
            });
            console.log(response.data);
        }
    }
}
