import React from "react";
import Box from "./Box";
import Importance from "./Importance";
import Urgency from "./Urgency";

const Boxes = ({ todos }) => {
    return (
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
    );
}
export default Boxes;