import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box";

const todos = [];

const App = () => {
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
                                todos={todos} />
                            <Box
                                urgency="not-urgent"
                                importance="important"
                                label="Decide"
                                todos={todos} />
                            <Box
                                urgency="urgent"
                                importance="not-important"
                                label="Delegate"
                                todos={todos} />
                            <Box
                                urgency="not-urgent"
                                importance="not-important"
                                label="Delete"
                                todos={todos} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));