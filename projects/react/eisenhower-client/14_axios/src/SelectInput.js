import { useField } from "formik";
import React from "react";

const SelectInput = ({ label, options, ...props }) => {
    const [field] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.name || props.id}>{label}</label>
            <select className="form-control" {...field} {...props}>{
                Object.keys(options).map(key => {
                    const o = options[key];
                    return <option key={o} value={o}>{o}</option>
                })
            }
            </select>
        </div>
    )
}
export default SelectInput;