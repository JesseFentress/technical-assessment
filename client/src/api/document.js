export function searchDocuments(formData) {
    const baseURL = "http://localhost:8000/api/document";
    const params = new URLSearchParams({
        site_name: formData.get("searchTerm"),
        is_exact_match: formData.get("isExactMatch") ? true : false,
    });

    const response = fetch(`${baseURL}?${params.toString()}`, {
        method: "GET",
    })
        .then((res) => {
            if (!res.ok) {
                return {
                    error: "Server returned an unexpected response.",
                };
            }
            return res.json();
        })
        .then((data) => {
            return { result: data };
        })
        .catch((err) => {
            return {
                error: "There is trouble reaching the server. Please refresh the page and try again.",
            };
        });

    return response;
}

export async function getDocuments(siteId, filters) {
    const baseURL = `http://localhost:8000/api/site/${siteId}/documents`;
    const params = new URLSearchParams({ ...filters });

    const response = await fetch(`${baseURL}?${params.toString()}`, {
        method: "GET",
    })
        .then((res) => {
            if (!res.ok) {
                return {
                    error: "Server returned an unexpected response.",
                };
            }
            return res.json();
        })
        .then((data) => {
            return { result: data };
        })
        .catch((err) => {
            return {
                error: "There is trouble reaching the server. Please refresh the page and try again.",
            };
        });

    return response;
}
