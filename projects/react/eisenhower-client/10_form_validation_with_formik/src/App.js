import { Router } from "@reach/router";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import TodoService from "./TodoService";
import Boxes from "./Boxes";
import Nav from "./Nav";
import TaskCreator from "./TaskCreator";
import TodoContext from "./TodoContext";

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
        <TodoContext.Provider value={completeTodo}>
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
                                path="/" />
                            <Details
                                todoService={todoService}
                                path="/details/:id" />
                        </Router>
                    </div>
                </div>
            </div>
        </TodoContext.Provider>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));