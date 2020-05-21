import React, { useState } from "react";
import Urgency from "./Urgency";
import Importance from "./Importance";

const TaskCreator = ({ onSubmit }) => {
    const [urgency, setUrgency] = useState(Urgency.URGENT);
    const [importance, setImportance] = useState(Importance.IMPORTANT);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="card mt-4">
            <h5 className="card-header">Create New Task</h5>
            <div className="card-body">
                <form onSubmit={e => {
                    e.preventDefault();
                    onSubmit({
                        "urgency": urgency,
                        "importance": importance,
                        "title": title,
                        "description": description
                    });
                }}>
                    <div className="form-group">
                        <label htmlFor="urgency">Urgency</label>
                        <select
                            onChange={e => setUrgency(e.target.value)}
                            onBlur={e => setUrgency(e.target.value)}
                            name="urgency"
                            className="form-control"
                            value={urgency.toString()}>{
                                Object.keys(Urgency).map(key => {
                                    const u = Urgency[key];
                                    return <option key={u} value={u}>{u}</option>
                                })
                            }</select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="importance">Importance</label>
                        <select
                            onChange={e => setImportance(e.target.value)}
                            onBlur={e => setImportance(e.target.value)}
                            name="importance"
                            className="form-control"
                            value={importance.toString()}>{
                                Object.keys(Importance).map(key => {
                                    const i = Importance[key];
                                    return <option key={i} value={i}>{i}</option>
                                })
                            }</select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            className="form-control"
                            name="title"
                            onChange={e => setTitle(e.target.value)}
                            value={title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            className="form-control"
                            name="description"
                            onChange={e => setDescription(e.target.value)}
                            value={description} />
                    </div>
                    <button type="submit" className="btn btn-primary">Go</button>
                </form>
            </div>
        </div>
    )
};

export default TaskCreator;
