import { Router } from "@reach/router";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Boxes from "./Boxes";
import Details from "./Details";
import TodoService from "./TodoService";
import Nav from "./Nav";
import TaskCreator from "./TaskCreator";

let todoService = new TodoService();

const App = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.findAll().then(apiTodos => setTodos(apiTodos), console.error);
    }, []);

    const completeTodo = (todo) => {
        todoService
            .completeTodo(todo)
            .then(result => setTodos(result), console.error);
    };

    return (
        <div>
            <div className="container-fluid page">
                <Nav />
                <div className="row">
                    <div className="col-3">
                        <TaskCreator onSubmit={todo => {
                            todoService.saveTodo(todo).then(todos => setTodos(todos));
                        }} />
                    </div>
                    <div className="col-9">
                        <Router>
                            <Boxes
                                todos={todos}
                                completeTodo={completeTodo}
                                path="/" />
                            <Details
                                todoService={todoService}
                                completeTodo={completeTodo}
                                path="/details/:id" />
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));