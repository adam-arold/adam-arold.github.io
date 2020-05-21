import React from "react";
import Urgency from "./Urgency";
import Importance from "./Importance";
import { useFormik } from "formik";

const TaskCreator = ({ onSubmit }) => {

    const { handleSubmit, handleChange, handleBlur, values } = useFormik({
        initialValues: {
            urgency: Urgency.URGENT,
            importance: Importance.IMPORTANT,
            title: "",
            description: ""
        },
        onSubmit: todo => {
            onSubmit(todo)
        }
    });

    return (
        <div className="card">
            <h5 className="card-header">Create New Task</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="urgency">Urgency</label>
                        <select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="urgency"
                            className="form-control"
                            value={values.urgency}>{
                                Object.keys(Urgency).map(key => {
                                    const u = Urgency[key];
                                    return <option key={u} value={u}>{u}</option>
                                })
                            }</select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="importance">Importance</label>
                        <select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="importance"
                            className="form-control"
                            value={values.importance}>{
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            className="form-control"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description} />
                    </div>
                    <button type="submit" className="btn btn-primary">Go</button>
                </form>
            </div>
        </div>
    )
};

export default TaskCreator;
