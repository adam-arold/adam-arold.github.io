import React, { FunctionComponent } from "react";
import Todo from "./Todo";

interface BoxProps {
    urgency: string;
    importance: string;
    label: string;
    todos: ITodo[];
}

const Box: FunctionComponent<BoxProps> = ({
    urgency,
    importance,
    label,
    todos,
}) => {
    return (
        <div className="col">
            <div className="card box text-white mb-4">
                <h2 className={`card-header ${urgency}-${importance}`}>
                    {label}
                </h2>
                <div className="card-body">
                    {todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Box;
