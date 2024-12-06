import { useState } from "react";
import { Checkbox } from "./Checkbox";

export const SearchForm = ({ onSubmit }) => {
    const [isSearchDisabled, setIsSearchDisabled] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        onSubmit(formData);
    };

    const validateInput = (event) => {
        /**
         * Validate search term input in order to toggle the ability submit the form.
         */
        if (event.target.value.length > 0) {
            setIsSearchDisabled(false);
        } else {
            setIsSearchDisabled(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="search-input">
                <input
                    name="searchTerm"
                    type="text"
                    placeholder="Search using site name"
                    onChange={validateInput}
                ></input>
                <button type="submit" disabled={isSearchDisabled}>
                    Search
                </button>
            </div>
            <div>
                <Checkbox
                    label="Exact Match"
                    name="isExactMatch"
                    checked={true}
                />
            </div>
        </form>
    );
};
