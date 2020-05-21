import React from "react";

const Box = ({ urgency, importance, label, todos }) => {
    return React.createElement("div", {}, [
        React.createElement("div", {}, label),
        React.createElement("div", {}, todos),
    ]);
};

export default Box