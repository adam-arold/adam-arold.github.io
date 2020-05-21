import React from "react";
import ReactDOM from "react-dom";
import Importance from "./Importance";
import Urgency from "./Urgency";
import Box from "./Box";

const todos = [];

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement(Box, {
                importance: Importance.IMPORTANT,
                urgency: Urgency.URGENT,
                label: "Do",
                todos: todos
            }),
            React.createElement(Box, {
                importance: Importance.IMPORTANT,
                urgency: Urgency.NOT_URGENT,
                label: "Decide",
                todos: todos
            }),
            React.createElement(Box, {
                importance: Importance.NOT_IMPORTANT,
                urgency: Urgency.URGENT,
                label: "Delegate",
                todos: todos
            }),
            React.createElement(Box, {
                importance: Importance.NOT_IMPORTANT,
                urgency: Urgency.NOT_URGENT,
                label: "Delete",
                todos: todos
            })
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);