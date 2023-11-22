import React from "react";

const ProgressBar = ({ maxVal, value }) => {
    return (
        <progress
            className="flex-1 rounded-full overflow-hidden appearance-none"
            max={maxVal}
            value={value}
        />
    );
};

export default ProgressBar;
