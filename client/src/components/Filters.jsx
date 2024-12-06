import { Checkbox } from "./Checkbox";

export const Filters = ({ onFilterChange }) => {
    return (
        <ul className="filters">
            <li>
                <label>Sort by Date</label>
                <select
                    name="sort"
                    defaultValue="desc"
                    onChange={onFilterChange}
                >
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </li>
            <li>
                <Checkbox
                    label="Infected Only"
                    name="infected"
                    onChange={onFilterChange}
                />
            </li>
            <li>
                <Checkbox
                    label="Up to Date"
                    name="upToDate"
                    onChange={onFilterChange}
                />
            </li>
        </ul>
    );
};
