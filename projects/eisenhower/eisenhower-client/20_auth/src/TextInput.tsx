import { FieldInputProps, useField } from "formik";
import React, { FunctionComponent } from "react";

interface TextInputProps extends FieldInputProps<""> {
    label: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({ label, ...props }) => {
    const [getFieldProps, getFieldMeta] = useField<{}>(props);
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{label}</label>
            <input
                className={`form-control ${
                    getFieldMeta.error && getFieldMeta.touched
                        ? "is-invalid"
                        : ""
                }`}
                {...getFieldProps}
                {...props}
            />
            {getFieldMeta.touched && getFieldMeta.error ? (
                <div className="invalid-feedback">{getFieldMeta.error}</div>
            ) : null}
        </div>
    );
};

export default TextInput;
