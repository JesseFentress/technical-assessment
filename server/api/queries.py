from datetime import datetime

def query_by_sitename(data):
    query = { "query": {} }
    query["query"]["term" if data.get('is_exact_match') else "match"] = {"siteName": data.get('site_name')}
    return query

def apply_sort(query, sort_value):
    query["sort"] = {
        "updatedAt": sort_value
    }

def apply_filters(query, filters):
    for key, value in filters.items():
        if value and key != "sort":
            query["query"]["bool"]["must"].append({"term": {key: value}})


def query_by_siteid(siteId, filters):
    '''
    Query for the SiteDocuments endpoint.

    Get collection of documents based on siteId. Filter and
    sort if params are provided.
    '''
    query = {
        "query": {
            "bool": {
                "must": [
                    {
                        "term": {
                            "siteId": siteId
                        }
                    },
                ]
            }
        }
    }

    apply_sort(query, filters.get("sort"))
    apply_filters(query, filters)

    return query
