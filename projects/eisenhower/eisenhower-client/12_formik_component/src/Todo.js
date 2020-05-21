import React, { useContext } from "react";
import { Link } from "@reach/router";
import TodoContext from "./TodoContext";

const Todo = ({ todo }) => {
    const completeTodo = useContext(TodoContext);
    return (
        <div className="todo text-dark p-2">
            <strong className="card-title">{todo.title}</strong>
            <Link
                className="action btn btn-outline-info ml-2"
                to={`/details/${todo.id}`}>
                <span className="oi oi-info" title="View" aria-hidden="true"></span>
            </Link>
            <button
                className="action btn btn-outline-success ml-2"
                onClick={() => completeTodo(todo)}>
                <span className="oi oi-circle-check" title="Complete" aria-hidden="true"></span>
            </button>
        </div>
    )
}
export default Todo