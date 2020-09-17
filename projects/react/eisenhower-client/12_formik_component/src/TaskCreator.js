import React from "react";
import Urgency from "./Urgency";
import Importance from "./Importance";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const TaskCreator = ({ onSubmit }) => {

    return (
        <div className="card">
            <h5 className="card-header">Create New Task</h5>
            <div className="card-body">
                <Formik
                    initialValues={{
                        urgency: Urgency.URGENT,
                        importance: Importance.IMPORTANT,
                        title: "",
                        description: ""
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Title can't be empty."),
                        description: Yup.string().required("Description can't be empty.")
                    })}
                    onSubmit={todo => {
                        onSubmit(todo)
                    }}
                >{({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="urgency">Urgency</label>
                            <Field
                                name="urgency"
                                className="form-control"
                                as="select"
                            >
                                {
                                    Object.keys(Urgency).map(key => {
                                        const u = Urgency[key];
                                        return <option key={u} value={u}>{u}</option>
                                    })
                                }
                            </Field>
                        </div>
                        <div className="form-group">
                            <label htmlFor="importance">Importance</label>
                            <Field
                                name="importance"
                                className="form-control"
                                as="select"
                            >
                                {
                                    Object.keys(Importance).map(key => {
                                        const i = Importance[key];
                                        return <option key={i} value={i}>{i}</option>
                                    })
                                }
                            </Field>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <Field
                                className={`form-control ${errors.title && touched.title ? "is-invalid" : ""}`}
                                name="title"
                            />
                            <ErrorMessage name="title" render={msg => <div className="invalid-feedback">{msg}</div>} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <Field
                                className={`form-control ${errors.description && touched.description ? "is-invalid" : ""}`}
                                name="description"
                                as="textarea"
                            />
                            <ErrorMessage name="description" render={msg => <div className="invalid-feedback">{msg}</div>} />
                        </div>
                        <button type="submit" className="btn btn-primary">Go</button>
                    </Form>
                )}
                </Formik>
            </div>
        </div >
    )
};

export default TaskCreator;
