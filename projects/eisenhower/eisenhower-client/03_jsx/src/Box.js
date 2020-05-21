import React from "react";

const Box = ({ urgency, importance, label, todos }) => {
    return <div className="col">
        <div className="card box text-white mb-4">
            <h2 className={`card-header ${urgency}-${importance}`}>
                {label}
            </h2>
            <div className="card-body">{
                todos
            }</div>
        </div>
    </div>
};

export default Box;
