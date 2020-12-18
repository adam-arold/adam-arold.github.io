import React from "react";
import ReactDOM from "react-dom";

const Box = () => {
    return React.createElement("div", {}, [
        React.createElement("div", {}, "Header"),
        React.createElement("div", {}, "Content"),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement(Box),
            React.createElement(Box),
            React.createElement(Box),
            React.createElement(Box)
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);