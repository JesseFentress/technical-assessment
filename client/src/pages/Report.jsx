import { useEffect, useState } from "react";
import { getDocuments } from "../api/document";
import { Code } from "../components/Code";
import { Filters } from "../components/Filters";
import { Link } from "react-router-dom";

export const Report = () => {
    const [reports, setReports] = useState(null);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        sort: "desc",
        infected: false,
        upToDate: false,
    });

    const handleFilterChange = (filter) => {
        const { name, type, value, checked } = filter.target;
        setFilters({
            ...filters,
            [name]: type == "checkbox" ? checked : value,
        });
    };

    useEffect(() => {
        const fetchDocuments = async () => {
            const response = await getDocuments("1", filters);

            if (response.error) {
                setError(response.error);
            } else {
                setReports(response.result);
            }
        };
        fetchDocuments();
    }, [filters]);

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>Site Id: 1</h1>
            <Filters onFilterChange={handleFilterChange} />
            {reports && <Code>{JSON.stringify(reports, null, 2)}</Code>}
            {error && <span>{error}</span>}
        </div>
    );
};
