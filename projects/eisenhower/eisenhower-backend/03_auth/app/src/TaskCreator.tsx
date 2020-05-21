import { Formik, Form } from "formik";
import React, { FunctionComponent } from "react";
import * as Yup from "yup";
import Importance from "./Importance";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import Urgency from "./Urgency";
import { v4 as uuid } from "uuid";

interface TaskCreatorProps {
    onSubmit: (todo: ITodo) => void;
}

const TaskCreator: FunctionComponent<TaskCreatorProps> = ({ onSubmit }) => {
    return (
        <div className="card">
            <h5 className="card-header">Create New Task</h5>
            <div className="card-body">
                <Formik
                    initialValues={{
                        id: uuid(),
                        urgency: Urgency.URGENT,
                        importance: Importance.IMPORTANT,
                        title: "",
                        description: "",
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Title can't be empty."),
                        description: Yup.string().required(
                            "Description can't be empty."
                        ),
                    })}
                    onSubmit={(todo) => {
                        onSubmit(todo);
                    }}
                    render={(formik) => (
                        <Form>
                            <div className="form-group">
                                <SelectInput
                                    name="urgency"
                                    label="Urgency"
                                    options={Urgency}
                                    {...formik.getFieldProps("urgency")}
                                />
                            </div>
                            <div className="form-group">
                                <SelectInput
                                    name="importance"
                                    label="Importance"
                                    options={Importance}
                                    {...formik.getFieldProps("importance")}
                                />
                            </div>
                            <TextInput
                                name="title"
                                label="Title"
                                {...formik.getFieldProps("title")}
                            />
                            <TextInput
                                name="description"
                                label="Description"
                                {...formik.getFieldProps("description")}
                            />
                            <button type="submit" className="btn btn-primary">
                                Go
                            </button>
                        </Form>
                    )}
                />
            </div>
        </div>
    );
};
export default TaskCreator;
