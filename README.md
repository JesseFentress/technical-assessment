# Technical Assesment

## By: Jesse Fentress

### General Guidelines:

-   Create DRF backend and React frontend.
-   Backend should have endpoints that return Elasticsearch queries for retrieving documents based on `siteName` field + any additional endpoints for other retrievals.

### Setup

Of course dependencies will need to be installed. Please run `npm install` and `pip install -r requirements.txt` in the `/client` and `/server` folders respectively. Both Node v22.12.0 and Python 3.9.6 were used.

### Explaination of Work:

When searching on the frontend at `http://localhost:5173` (Vite), you can type in a site name value then hit the "Search" button or hit `Enter` to send a request to the backend. The backend's `/document` endpoint should be hit and works as the retrieval point for documents. Here is where we can add the `site_name` query param to search for documents with an input `site_name` value. Of course more query params would be added in a full API.

Clicking the resulting query will take you to `https://localhost:5173/report/1`. This is a mock version of going to a page for all the documents related to the previously search site name. However, using the `siteId` value related to the `siteName` value ( I just use "1" as it is a dumby page). On this page you can do some toggling and sorting to see how the ES query might change to filter the results. Also we use a new endpoint `/site/:siteId/documents` to keep the API RESTful.
