import { useField, FieldInputProps } from "formik";
import React, { FunctionComponent } from "react";

interface SelectInputProps extends FieldInputProps<""> {
    label: string;
    options: { [name: string]: string };
}

const SelectInput: FunctionComponent<SelectInputProps> = ({
    label,
    options,
    ...props
}) => {
    const [field] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{label}</label>
            <select className="form-control" {...field} {...props}>
                {Object.keys(options).map((key) => {
                    const o = options[key];
                    return (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default SelectInput;
