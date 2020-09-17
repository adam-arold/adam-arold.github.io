import { Router } from "@reach/router";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Boxes from "./Boxes";
import Details from "./Details";
import ErrorBoundary from "./ErrorBoundary";
import Nav from "./Nav";
import TaskCreator from "./TaskCreator";
import TodoContext from "./TodoContext";
import TodoService from "./TodoService";

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
                        <ErrorBoundary>
                            <Router>
                                <Boxes
                                    todos={todos}
                                    path="/" />
                                <Details
                                    todoService={todoService}
                                    path="/details/:id" />
                            </Router>
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        </TodoContext.Provider>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));