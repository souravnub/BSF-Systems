import { Field } from "formik";
import React from "react";

const Input = ({ className, label, ...props }) => {
    return (
        <div>
            {label && (
                <label htmlFor={props.id} className="mb-1 inline-block">
                    {label}
                </label>
            )}
            <Field
                {...props}
                className={`${className} bg-dark-fade px-3 py-2 w-full rounded-lg`}
            />
        </div>
    );
};

export default Input;
