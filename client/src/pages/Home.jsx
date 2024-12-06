import { useState } from "react";
import { Link } from "react-router-dom";
import { Code } from "../components/Code";
import { SearchForm } from "../components/SearchForm";
import { searchDocuments } from "../api/document";

export const Home = () => {
    const [reports, setReports] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async (formData) => {
        const response = await searchDocuments(formData);

        if (response.error) {
            setError(response.error);
        } else {
            setReports(response.result);
        }
    };

    return (
        <div>
            <h3>Security Report Lookup</h3>
            <SearchForm onSubmit={handleSearch} />
            {reports && (
                <Link to="/report/1" target="_blank">
                    <Code>{JSON.stringify(reports, null, 2)}</Code>
                </Link>
            )}
            {error && <span>{error}</span>}
        </div>
    );
};
