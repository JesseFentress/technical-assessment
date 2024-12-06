from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from .serializers import DocumentSerializer, SiteSerializer
from .queries import query_by_sitename, query_by_siteid

class Documents(APIView):
    
    def get(self, request: Request, format="json") -> Response:
        serializer = DocumentSerializer(data=request.query_params)
        
        if not serializer.is_valid():
            return Response({"error": "Invalid parameters"}, status=404)

        return Response(query_by_sitename(serializer.data))
    

class SiteDocuments(APIView):

    def get(self, request: Request, siteId, format="json") -> Response:

        serializer = SiteSerializer(data=request.query_params)

        if not serializer.is_valid():
            return Response({"error": "Invalid parameters"}, status=404)

        return Response(query_by_siteid(siteId, serializer.data))

    