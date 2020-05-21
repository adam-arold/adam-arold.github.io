import React from "react";
import Urgency from "./Urgency";
import Importance from "./Importance";
import { useFormik } from "formik";

const TaskCreator = ({ onSubmit }) => {

    const validate = (values) => {
        const errors = {};
        if (!values.title || values.title == "") {
            errors.title = "Title can't be empty"
        }
        if (!values.description || values.description == "") {
            errors.description = "Description can't be empty"
        }
        return errors;
    }
    
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            urgency: Urgency.URGENT,
            importance: Importance.IMPORTANT,
            title: "",
            description: ""
        },
        validate: validate,
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
                            className={`form-control ${errors.title && touched.title ? "is-invalid" : ""}`}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title} />
                        {errors.title && touched.title ? <div className="invalid-feedback">{errors.title}</div> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            className={`form-control ${errors.description && touched.description ? "is-invalid" : ""}`}
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description} />
                        {errors.description && touched.description ? <div className="invalid-feedback">{errors.description}</div> : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Go</button>
                </form>
            </div>
        </div>
    )
};

export default TaskCreator;
