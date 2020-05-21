import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import TodoService from "./TodoService";
import TaskCreator from "./TaskCreator";
import { Router } from "@reach/router";
import Boxes from "./Boxes";
import Nav from "./Nav";
import DetailsWithErrorBoundary from "./Details";

let todoService = new TodoService();

const App = () => {

    const [todos, setTodos] = useState([]);

    const completeTodo = (todo) => {
        todoService
            .completeTodo(todo)
            .then(result => setTodos(augmentTodos(result)), console.error);
    };

    const augmentTodos = (todos) => {
        return todos.map(todo => {
            todo["complete"] = () => completeTodo(todo);
            return todo;
        });
    };

    useEffect(() => {
        todoService.findAll().then(apiTodos => setTodos(augmentTodos(apiTodos)), console.error);
    }, []);

    return (
        <div>
            <div className="container-fluid page">
                <Nav />
                <div className="row">
                    <div className="col-3">
                        <TaskCreator onSubmit={todo => {
                            todoService.saveTodo(todo).then(todos => setTodos(augmentTodos(todos)));
                        }} />
                    </div>
                    <div className="col-9">
                        <Router>
                            <Boxes todos={todos} path="/" />
                            <DetailsWithErrorBoundary todoService={todoService} path="/details/:id" />
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
};
ReactDOM.render(<App />, document.getElementById("root"));