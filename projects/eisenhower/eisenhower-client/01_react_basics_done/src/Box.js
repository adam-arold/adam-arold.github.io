import React from "react";
import Todo from "./Todo"

const Box = (props) => {
    let { urgency, importance, label, todos, completeFn } = props;
    return <div className="col">
        <div className="card box text-white mb-4">
            <h2 className={`card-header ${urgency}-${importance}`}>
                {label}
            </h2>
            <div className="card-body">{
                todos.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    completeFn={completeFn} />)
            }</div>
        </div>
    </div>
};

export default Box;
