import axios, { AxiosInstance } from "axios";
import { v4 as uuid } from "uuid";

export default class TodoService {
    private token?: string;

    async findAll() {
        await this.checkToken();
        const result = await this.client().get("/todos");
        return result.data;
    }

    async findById(id: string) {
        await this.checkToken();
        const result = await this.client().get(`/todos/${id}`);
        return result.data;
    }

    async saveTodo(todo: ITodo) {
        await this.checkToken();
        const todoWithId = todo;
        todo["id"] = uuid();
        const result = await this.client().post("/todos/", todoWithId);
        return result.data;
    }

    async completeTodo(todo: ITodo) {
        await this.checkToken();
        const result = await this.client().delete(`/todos/${todo.id}`);
        return result.data;
    }

    private client(): AxiosInstance {
        return axios.create({
            baseURL: "http://localhost:8080",
            headers: this.token
                ? {
                      "Access-Control-Allow-Origin": "*",
                      "Authorization": `Bearer ${this.token}`
                  }
                : {
                      "Access-Control-Allow-Origin": "*",
                  },
        });
    }

    private async checkToken() {
        if (!this.token) {
            const response = await this.client().post("/authenticate", {
                username: "user",
                password: "password",
            });
            this.token = response.data.token;
            console.log("Got new token", this.token);
        }
    }
}
