import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
    const [getFieldProps, getFieldMeta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input
                className={`form-control ${getFieldMeta.error && getFieldMeta.touched ? "is-invalid" : ""}`}
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