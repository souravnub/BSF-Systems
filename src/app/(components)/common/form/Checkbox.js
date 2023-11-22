import { Field } from "formik";
import React from "react";

const Checkbox = ({ className, label, ...props }) => {
    return (
        <div className="flex items-center ps-4 border  rounded border-neutral-700">
            <Field
                type="checkbox"
                {...props}
                className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 ${className}`}
            />
            <label
                htmlFor={props.id}
                className="w-full py-4 ms-2 text-sm font-medium text-light">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
