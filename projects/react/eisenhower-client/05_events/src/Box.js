import React from "react";
import Todo from "./Todo";

const Box = ({ urgency, importance, label, todos, completeTodo }) => {
    return <div className="col">
        <div className="card box text-white mb-4">
            <h2 className={`card-header ${urgency}-${importance}`}>
                {label}
            </h2>
            <div className="card-body">{
                todos.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo} />)
            }</div>
        </div>
    </div>
};

export default Box;
