import { useState } from "react";

export const Checkbox = ({
    label,
    name,
    onChange = () => 0,
    checked = false,
}) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckedChange = (event) => {
        setIsChecked(event.target.checked);
        // onChange(event);
        onChange(event);
    };

    return (
        <div>
            <label>{label}</label>
            <input
                name={name}
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckedChange}
            ></input>
        </div>
    );
};
