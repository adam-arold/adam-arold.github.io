import { Formik, Form } from "formik";
import React from "react";
import * as Yup from 'yup';
import Importance from "./Importance";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import Urgency from "./Urgency";

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
                >
                    <Form>
                        <div className="form-group">
                            <SelectInput
                                name="urgency"
                                label="Urgency"
                                options={Urgency}
                            />
                        </div>
                        <div className="form-group">
                            <SelectInput
                                name="importance"
                                label="Importance"
                                options={Importance}
                            />
                        </div>
                        <TextInput
                            name="title"
                            label="Title"
                        />
                        <TextInput
                            name="description"
                            label="Description"
                        />
                        <button type="submit" className="btn btn-primary">Go</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default TaskCreator;
