import React from "react";
import Urgency from "./Urgency";
import Importance from "./Importance";
import { useFormik } from "formik";
import * as Yup from 'yup';

const TaskCreator = ({ onSubmit }) => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            urgency: Urgency.URGENT,
            importance: Importance.IMPORTANT,
            title: "",
            description: ""
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title can't be empty."),
            description: Yup.string().required("Description can't be empty.")
        }),
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
                            name="urgency"
                            className="form-control"
                            {...getFieldProps("urgency")}
                        >
                            {
                                Object.keys(Urgency).map(key => {
                                    const u = Urgency[key];
                                    return <option key={u} value={u}>{u}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="importance">Importance</label>
                        <select
                            name="importance"
                            className="form-control"
                            {...getFieldProps("importance")}
                        >
                            {
                                Object.keys(Importance).map(key => {
                                    const i = Importance[key];
                                    return <option key={i} value={i}>{i}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            className={`form-control ${errors.title && touched.title ? "is-invalid" : ""}`}
                            name="title"
                            {...getFieldProps("title")} />
                        {errors.title && touched.title ? <div className="invalid-feedback">{errors.title}</div> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            className={`form-control ${errors.description && touched.description ? "is-invalid" : ""}`}
                            name="description"
                            {...getFieldProps("description")} />
                        {errors.description && touched.description ? <div className="invalid-feedback">{errors.description}</div> : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Go</button>
                </form>
            </div>
        </div>
    )
};

export default TaskCreator;
