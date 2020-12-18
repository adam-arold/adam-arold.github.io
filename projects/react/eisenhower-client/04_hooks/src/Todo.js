import React from "react";

const Todo = ({ todo }) => {
    return (
        <div className="todo text-dark p-2">
            <strong className="card-title">{todo.title}</strong>
            <a
                className="action btn btn-outline-info ml-2"
                href="#"
            >
                <span className="oi oi-info" title="View" aria-hidden="true"></span>
            </a>
            <button
                className="action btn btn-outline-success ml-2">
                <span className="oi oi-circle-check" title="Complete" aria-hidden="true"></span>
            </button>
        </div>
    )
}
export default Todo