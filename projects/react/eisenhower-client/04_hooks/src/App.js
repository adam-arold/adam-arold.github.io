import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Box from "./Box";
import TodoService from "./TodoService";
import Importance from "./Importance";
import Urgency from "./Urgency";

let todoService = new TodoService();

const App = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.findAll().then(apiTodos => setTodos(apiTodos), console.error);
    }, []);

    console.log("todos:", todos);

    return (
        <div>
            <div className="container-fluid page">
                <div className="row">
                    <div className="col-3">
                        Sidebar
                    </div>
                    <div className="col-9">
                        <div className="row row-cols-2">
                            <Box
                                urgency="urgent"
                                importance="important"
                                label="Do"
                                todos={todos.filter(todo => {
                                    return todo.importance === Importance.IMPORTANT && todo.urgency === Urgency.URGENT
                                })} />
                            <Box
                                urgency="not-urgent"
                                importance="important"
                                label="Decide"
                                todos={todos.filter(todo => {
                                    return todo.importance === Importance.IMPORTANT && todo.urgency === Urgency.NOT_URGENT
                                })} />
                            <Box
                                urgency="urgent"
                                importance="not-important"
                                label="Delegate"
                                todos={todos.filter(todo => {
                                    return todo.importance === Importance.NOT_IMPORTANT && todo.urgency === Urgency.URGENT
                                })} />
                            <Box
                                urgency="not-urgent"
                                importance="not-important"
                                label="Delete"
                                todos={todos.filter(todo => {
                                    return todo.importance === Importance.NOT_IMPORTANT && todo.urgency === Urgency.NOT_URGENT
                                })} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));